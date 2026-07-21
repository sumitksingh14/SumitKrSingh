export async function exportPortfolioResumePdf({ selector = '#pdf-content', filename = 'SumitKumarSingh-Resume.pdf' } = {}) {
  const { jsPDF } = await import('jspdf');

  const container = document.querySelector(selector);
  if (!container) {
    throw new Error(`Could not find element with selector: ${selector}`);
  }

  // Decode HTML entities and strip emojis from scraped text
  const decodeEntities = (str) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  };

  const stripEmoji = (str) =>
    str.replace(/[\u{1F300}-\u{1FFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FEFF}]/gu, '').trim();

  // jsPDF standard fonts only support WinAnsiEncoding; unsupported characters cause text truncation
  const normalizeText = (str) => {
    return str
      .replace(/[\u2011\u2012\u2013\u2014\u2015]/g, '-') // normalize dashes/hyphens
      .replace(/[\u2018\u2019]/g, "'") // single quotes
      .replace(/[\u201C\u201D]/g, '"') // double quotes
      .replace(/[\u2026]/g, '...'); // ellipsis
  };

  const cleanText = (str) => normalizeText(decodeEntities(stripEmoji(str)));

  const getText = (query, fallback = '') => {
    const el = container.querySelector(query);
    return cleanText(el?.textContent?.trim() || fallback);
  };

  const getMultiText = (query) =>
    Array.from(container.querySelectorAll(query))
      .map((el) => cleanText(el.textContent.trim()))
      .filter(Boolean);

  // --- Scrape content ---
  const rawName = getText('.hero-heading', "Hi, I'm Sumit Kumar Singh");
  // Remove greeting prefix and any trailing emoji
  const nameText = rawName.replace(/^Hi,?\s*I[''\u2019]?m\s+/i, '').replace(/\s*👋\s*/g, '').trim() || 'Sumit Kumar Singh';

  const headline = getText('.hero-subheading', 'Technical Program Manager | Mobile Delivery Leader');
  const summaryParagraphs = getMultiText('.about-content .about-text').slice(0, 3);
  const quickFacts = getMultiText('.about-quick-facts .about-list li');
  const skills = getMultiText('.skills-grid .skill-label');
  const location = getText('.hero-info-row p', 'Pune, India');

  const contactEmail = 'sumit.kr.singh14@gmail.com';
  const contactPhone = '+91 98707 78070';
  const linkedin = 'https://linkedin.com/in/sumitsingh14';
  const github = 'https://github.com/sumitksingh14';

  const experiences = Array.from(container.querySelectorAll('.experience-card')).map((card) => {
    const rawTitle = cleanText(card.querySelector('.exp-title')?.textContent.trim() || '');
    const period = cleanText(card.querySelector('.exp-period')?.textContent.trim() || '');
    const points = Array.from(card.querySelectorAll('.exp-points li'))
      .map((li) => cleanText(li.textContent.trim()))
      .filter(Boolean);
    const dashIdx = rawTitle.indexOf(' - ');
    const position = dashIdx !== -1 ? rawTitle.slice(0, dashIdx).trim() : rawTitle;
    const company = dashIdx !== -1 ? rawTitle.slice(dashIdx + 3).trim() : '';
    return { position, company, period, points };
  });

  const projects = Array.from(container.querySelectorAll('.project-card'))
    .map((card) => ({
      title: cleanText(card.querySelector('.project-title')?.textContent.trim() || ''),
      description: cleanText(card.querySelector('.project-desc')?.textContent.trim() || ''),
      tags: Array.from(card.querySelectorAll('.tag')).map((t) => cleanText(t.textContent.trim())).filter(Boolean),
    }))
    .slice(0, 4);

  // --- PDF Setup ---
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const margin = 45;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  const BOTTOM_MARGIN = 65; // safe zone – no text below this distance from page bottom
  let cursorY = 52;

  const COLORS = {
    name: [15, 23, 42],         // slate-900
    accent: [37, 99, 235],      // blue-600
    sectionTitle: [30, 64, 175], // blue-800
    divider: [148, 163, 184],   // slate-400
    body: [30, 41, 59],         // slate-800
    meta: [71, 85, 105],        // slate-600
    tagBg: [241, 245, 249],     // slate-100
  };

  const checkPageBreak = (reserve = BOTTOM_MARGIN) => {
    if (cursorY > pageHeight - Math.max(reserve, BOTTOM_MARGIN)) {
      doc.addPage();
      cursorY = 50;
    }
  };

  const addDivider = (y, color = COLORS.divider) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
  };

  const addSectionHeader = (title) => {
    checkPageBreak(80);
    cursorY += 6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.sectionTitle);
    doc.text(title.toUpperCase(), margin, cursorY);
    cursorY += 6;
    addDivider(cursorY, COLORS.sectionTitle);
    cursorY += 14;
    doc.setTextColor(...COLORS.body);
  };

  const addTextBlock = (text, options = {}) => {
    const { fontSize = 10.5, fontStyle = 'normal', indent = 0, leading = 15, color = COLORS.body } = options;
    doc.setFont('helvetica', fontStyle);
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    lines.forEach((line) => {
      checkPageBreak(leading + BOTTOM_MARGIN);
      doc.text(line, margin + indent, cursorY);
      cursorY += leading;
    });
    doc.setTextColor(...COLORS.body);
  };

  const addBulletedList = (items, fontSize = 10, leading = 14) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...COLORS.body);
    items.forEach((item) => {
      if (!item) return;
      // Reserve enough space for at least the first line of the bullet
      checkPageBreak(leading + BOTTOM_MARGIN);
      const wrapped = doc.splitTextToSize(item, contentWidth - 18);
      doc.text('\u2022', margin + 2, cursorY);
      doc.text(wrapped[0], margin + 14, cursorY);
      cursorY += leading;
      for (let i = 1; i < wrapped.length; i++) {
        checkPageBreak(leading + BOTTOM_MARGIN);
        doc.text(wrapped[i], margin + 14, cursorY);
        cursorY += leading;
      }
      // Guard the inter-bullet spacing against page overflow
      checkPageBreak(leading);
      cursorY += 2;
    });
  };

  const addKeyValueRow = (key, value, options = {}) => {
    const { fontSize = 10 } = options;
    checkPageBreak(55);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(fontSize);
    doc.setTextColor(...COLORS.meta);
    doc.text(`${key}:`, margin, cursorY);
    const keyWidth = doc.getTextWidth(`${key}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.body);
    doc.text(value, margin + keyWidth, cursorY);
    cursorY += fontSize + 5;
  };

  const addLinkRow = (key, url, options = {}) => {
    const { fontSize = 10 } = options;
    checkPageBreak(55);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(fontSize);
    doc.setTextColor(...COLORS.meta);
    doc.text(`${key}:`, margin, cursorY);
    const keyWidth = doc.getTextWidth(`${key}: `);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(fontSize);
    doc.setTextColor(...COLORS.accent);
    doc.textWithLink(url, margin + keyWidth, cursorY, { url });
    doc.setTextColor(...COLORS.body);
    cursorY += fontSize + 5;
  };

  // ============================================================
  // HEADER — Name, Headline, Contact Strip
  // ============================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...COLORS.name);
  doc.text(nameText, margin, cursorY);
  cursorY += 30;

  // Headline (may wrap)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.meta);
  const headlineLines = doc.splitTextToSize(headline, contentWidth);
  headlineLines.forEach((line) => {
    doc.text(line, margin, cursorY);
    cursorY += 15;
  });
  cursorY += 4;

  // Contact strip
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.meta);
  const strip1 = `${contactEmail}  |  ${contactPhone}  |  ${location}`;
  doc.text(strip1, margin, cursorY);
  cursorY += 13;

  // URLs as clickable links inline
  const githubLabel = 'github.com/sumitksingh14';
  const linkedinLabel = 'linkedin.com/in/sumitsingh14';
  doc.setTextColor(...COLORS.accent);
  doc.textWithLink(githubLabel, margin, cursorY, { url: github });
  const ghWidth = doc.getTextWidth(githubLabel);
  doc.setTextColor(...COLORS.meta);
  doc.text('  |  ', margin + ghWidth, cursorY);
  const separatorWidth = doc.getTextWidth('  |  ');
  doc.setTextColor(...COLORS.accent);
  doc.textWithLink(linkedinLabel, margin + ghWidth + separatorWidth, cursorY, { url: linkedin });
  doc.setTextColor(...COLORS.body);
  cursorY += 16;

  addDivider(cursorY);
  cursorY += 18;

  // ============================================================
  // PROFESSIONAL SUMMARY
  // ============================================================
  if (summaryParagraphs.length) {
    addSectionHeader('Professional Summary');
    summaryParagraphs.forEach((paragraph, i) => {
      addTextBlock(paragraph, { fontSize: 10.5, leading: 15 });
      if (i < summaryParagraphs.length - 1) cursorY += 4;
    });
    cursorY += 4;
  }

  // ============================================================
  // CORE SKILLS
  // ============================================================
  if (skills.length) {
    addSectionHeader('Core Skills');
    const skillsPerRow = 4;
    const colWidth = contentWidth / skillsPerRow;
    const rows = [];
    for (let i = 0; i < skills.length; i += skillsPerRow) {
      rows.push(skills.slice(i, i + skillsPerRow));
    }
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.body);
    rows.forEach((row) => {
      checkPageBreak(BOTTOM_MARGIN);
      row.forEach((skill, ci) => {
        doc.text(`\u2022 ${skill}`, margin + ci * colWidth, cursorY);
      });
      cursorY += 15;
    });
    cursorY += 4;
  }

  // ============================================================
  // PROFESSIONAL EXPERIENCE
  // ============================================================
  if (experiences.length) {
    addSectionHeader('Professional Experience');
    experiences.forEach((exp) => {
      // Reserve space for title + at least first bullet line
      checkPageBreak(100);

      // Calculate available width for the role title (leave room for period text)
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9.5);
      const periodWidth = exp.period ? doc.getTextWidth(exp.period) + 16 : 0;

      // Role title
      const roleTitle = exp.company ? `${exp.position} — ${exp.company}` : exp.position;
      const roleTitleLines = doc.splitTextToSize(roleTitle, contentWidth - periodWidth);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...COLORS.name);
      roleTitleLines.forEach((line, li) => {
        checkPageBreak(15 + BOTTOM_MARGIN);
        if (li === 0 && exp.period) {
          doc.text(line, margin, cursorY);
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(9.5);
          doc.setTextColor(...COLORS.meta);
          doc.text(exp.period, pageWidth - margin, cursorY, { align: 'right' });
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(...COLORS.name);
        } else {
          doc.text(line, margin, cursorY);
        }
        cursorY += 15;
      });

      doc.setTextColor(...COLORS.body);
      cursorY += 2;
      addBulletedList(exp.points);
      cursorY += 4;
    });
  }

  // ============================================================
  // SELECTED PROJECTS
  // ============================================================
  if (projects.length) {
    addSectionHeader('Selected Projects');
    projects.forEach((project) => {
      checkPageBreak(80);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(...COLORS.name);
      doc.text(project.title, margin, cursorY);
      cursorY += 14;

      doc.setTextColor(...COLORS.body);
      addTextBlock(project.description, { fontSize: 10, leading: 14 });

      if (project.tags.length) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9);
        doc.setTextColor(...COLORS.meta);
        doc.text(project.tags.join(' · '), margin, cursorY);
        cursorY += 12;
      }
      cursorY += 6;
    });
  }

  // ============================================================
  // EDUCATION / QUALIFICATIONS
  // ============================================================
  if (quickFacts.length) {
    addSectionHeader('Education & Qualifications');
    addBulletedList(quickFacts);
    cursorY += 4;
  }

  doc.save(filename);
}
