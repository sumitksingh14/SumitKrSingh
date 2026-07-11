export async function exportPortfolioResumePdf({ selector = '#pdf-content', filename = 'Portfolio-Resume.pdf' } = {}) {
  const { jsPDF } = await import('jspdf');

  const container = document.querySelector(selector);
  if (!container) {
    throw new Error(`Could not find element with selector: ${selector}`);
  }

  const getText = (query, fallback = '') => {
    const el = container.querySelector(query);
    return el?.textContent?.trim() || fallback;
  };

  const getMultiText = (query) =>
    Array.from(container.querySelectorAll(query)).map((el) => el.textContent.trim()).filter(Boolean);

  const nameText = getText('.hero-heading', 'Sumit Kumar Singh').replace(/^Hi,?\s*I'm\s*/i, '');
  const headline = getText('.hero-subheading', 'Technical Program Manager | Mobile Delivery Leader');
  const summaryParagraphs = getMultiText('.about-content .about-text').slice(0, 3);
  const quickFacts = getMultiText('.about-quick-facts .about-list li');
  const skills = getMultiText('.skills-grid .skill-label');
  const location = getText('.hero-info-row p', 'Pune, India');

  const contactEmail = getText('#contact .contact-row:nth-of-type(1) .contact-value', getText('.hero-socials a[href^="mailto:"]', 'sumit.kr.singh14@gmail.com'));
  const contactPhone = getText('#contact .contact-row:nth-of-type(2) .contact-value', getText('.hero-info-row a[href^="tel:"]', '+91 98707 78070'));
  const linkedin = Array.from(container.querySelectorAll('.contact-social-icons a[href*="linkedin"]')).map((a) => a.href)[0] || 'https://linkedin.com/in/sumitsingh14';
  const github = Array.from(container.querySelectorAll('.contact-social-icons a[href*="github"]')).map((a) => a.href)[0] || 'https://github.com/sumitksingh14';

  const experiences = Array.from(container.querySelectorAll('.experience-card')).map((card) => {
    const rawTitle = card.querySelector('.exp-title')?.textContent.trim() || '';
    const period = card.querySelector('.exp-period')?.textContent.trim() || '';
    const points = Array.from(card.querySelectorAll('.exp-points li')).map((li) => li.textContent.trim()).filter(Boolean);
    const [position, company] = rawTitle.split(' - ').map((text) => text.trim());
    return { position: position || rawTitle, company: company || '', period, points };
  });

  const projects = Array.from(container.querySelectorAll('.project-card')).map((card) => {
    const projectTitle = card.querySelector('.project-title')?.textContent.trim() || '';
    const projectDesc = card.querySelector('.project-desc')?.textContent.trim() || '';
    return { title: projectTitle, description: projectDesc };
  }).slice(0, 4);

  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  let cursorY = 50;

  const addLine = (y) => {
    doc.setDrawColor(200);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
  };

  const addSectionHeader = (title) => {
    if (cursorY > pageHeight - 80) {
      doc.addPage();
      cursorY = 50;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(title.toUpperCase(), margin, cursorY);
    cursorY += 8;
    addLine(cursorY);
    cursorY += 18;
  };

  const addTextBlock = (text, options = {}) => {
    const { fontSize = 11, fontStyle = 'normal', indent = 0, leading = 16 } = options;
    doc.setFont('helvetica', fontStyle);
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    lines.forEach((line) => {
      if (cursorY > pageHeight - 60) {
        doc.addPage();
        cursorY = 50;
      }
      doc.text(line, margin + indent, cursorY);
      cursorY += leading;
    });
  };

  const addLinkText = (text, url, options = {}) => {
    const { fontSize = 11, fontStyle = 'normal', color = '#1a73e8' } = options;
    doc.setFont('helvetica', fontStyle);
    doc.setFontSize(fontSize);
    if (cursorY > pageHeight - 60) {
      doc.addPage();
      cursorY = 50;
    }
    const textWidth = doc.getTextWidth(text);
    doc.setTextColor(color);
    doc.textWithLink(text, margin, cursorY, { url });
    doc.setTextColor(0, 0, 0);
    cursorY += fontSize + 4;
    return textWidth;
  };

  const addBulletedList = (items) => {
    items.forEach((item) => {
      if (!item) return;
      if (cursorY > pageHeight - 60) {
        doc.addPage();
        cursorY = 50;
      }
      const wrapped = doc.splitTextToSize(item, contentWidth - 20);
      doc.text(`• ${wrapped[0]}`, margin, cursorY);
      cursorY += 14;
      for (let i = 1; i < wrapped.length; i += 1) {
        if (cursorY > pageHeight - 60) {
          doc.addPage();
          cursorY = 50;
        }
        doc.text(wrapped[i], margin + 12, cursorY);
        cursorY += 14;
      }
      cursorY += 6;
    });
  };

  const addTwoColumnText = (left, right) => {
    const halfWidth = (contentWidth - 20) / 2;
    const leftLines = doc.splitTextToSize(left, halfWidth);
    const rightLines = doc.splitTextToSize(right, halfWidth);
    const maxLines = Math.max(leftLines.length, rightLines.length);

    for (let i = 0; i < maxLines; i += 1) {
      if (cursorY > pageHeight - 60) {
        doc.addPage();
        cursorY = 50;
      }
      if (leftLines[i]) {
        doc.text(leftLines[i], margin, cursorY);
      }
      if (rightLines[i]) {
        doc.text(rightLines[i], margin + halfWidth + 20, cursorY);
      }
      cursorY += 14;
    }
    cursorY += 8;
  };

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text(nameText, margin, cursorY);
  cursorY += 32;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const contactLine = `${contactEmail} | ${contactPhone} | ${location}`;
  const profileLine = `${github} | ${linkedin}`;
  addTextBlock(headline, { fontSize: 12, leading: 16 });
  addTextBlock(contactLine, { fontSize: 10, leading: 14 });
  addTextBlock(profileLine, { fontSize: 10, leading: 14 });
  cursorY += 6;
  addLine(cursorY);
  cursorY += 22;

  if (summaryParagraphs.length) {
    addSectionHeader('Professional Summary');
    summaryParagraphs.forEach((paragraph) => {
      addTextBlock(paragraph, { fontSize: 11, leading: 16 });
    });
  }

  if (skills.length) {
    addSectionHeader('Core Skills');
    addTwoColumnText(skills.slice(0, Math.ceil(skills.length / 2)).join(' • '), skills.slice(Math.ceil(skills.length / 2)).join(' • '));
  }

  if (experiences.length) {
    addSectionHeader('Professional Experience');
    experiences.forEach((experience) => {
      if (cursorY > pageHeight - 120) {
        doc.addPage();
        cursorY = 50;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(`${experience.position}${experience.company ? ` — ${experience.company}` : ''}`, margin, cursorY);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      if (experience.period) {
        doc.text(experience.period, pageWidth - margin, cursorY, { align: 'right' });
      }
      cursorY += 18;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      addBulletedList(experience.points);
    });
  }

  if (projects.length) {
    addSectionHeader('Selected Projects');
    projects.forEach((project) => {
      if (cursorY > pageHeight - 120) {
        doc.addPage();
        cursorY = 50;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(project.title, margin, cursorY);
      cursorY += 16;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      addTextBlock(project.description, { fontSize: 10, leading: 14 });
      cursorY += 10;
    });
  }

  if (quickFacts.length) {
    addSectionHeader('Additional Qualifications');
    addBulletedList(quickFacts);
  }

  addSectionHeader('Contact');
  addTextBlock(`Email: ${contactEmail}`, { fontSize: 11, leading: 16 });
  addTextBlock(`Phone: ${contactPhone}`, { fontSize: 11, leading: 16 });
  addTextBlock('LinkedIn:', { fontSize: 11, leading: 16 });
  addLinkText(linkedin, linkedin, { fontSize: 11, fontStyle: 'normal', color: '#0b66c3' });
  addTextBlock('GitHub:', { fontSize: 11, leading: 16 });
  addLinkText(github, github, { fontSize: 11, fontStyle: 'normal', color: '#0b66c3' });

  doc.save(filename);
}
