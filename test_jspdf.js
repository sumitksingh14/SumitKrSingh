import { jsPDF } from 'jspdf';
const doc = new jsPDF();
const text = "delivering large‑scale, complex digital";
console.log("Original:", text);
console.log("Split:", doc.splitTextToSize(text, 100));
const clean = text.replace(/[\u2011\u2013\u2014]/g, '-');
console.log("Clean:", doc.splitTextToSize(clean, 100));
