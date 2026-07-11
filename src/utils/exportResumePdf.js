export async function exportPortfolioResumePdf({ selector = '#pdf-content', filename = 'Portfolio-Resume.pdf' } = {}) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas/dist/html2canvas.esm.js'),
    import('jspdf'),
  ]);

  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`Could not find element with selector: ${selector}`);
  }

  const originalBackground = element.style.backgroundColor;
  element.style.backgroundColor = '#ffffff';

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

    const imageWidth = canvas.width * ratio;
    const imageHeight = canvas.height * ratio;
    const marginX = (pdfWidth - imageWidth) / 2;
    let positionY = 20;

    pdf.addImage(imgData, 'PNG', marginX, positionY, imageWidth, imageHeight);

    if (imageHeight > pdfHeight - positionY) {
      const pageHeight = pdf.internal.pageSize.getHeight();
      let remainingHeight = imageHeight;
      let offsetY = 0;

      while (remainingHeight > 0) {
        offsetY += pdfHeight;
        remainingHeight -= pdfHeight;
        if (remainingHeight > 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', marginX, -offsetY + positionY, imageWidth, imageHeight);
        }
      }
    }

    pdf.save(filename);
  } finally {
    element.style.backgroundColor = originalBackground;
  }
}
