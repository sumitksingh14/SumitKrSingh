import { jsPDF } from 'jspdf';
const doc = new jsPDF();
const text1 = "Program Manager / Technical Project Manager with a track record of delivering large‑scale, complex digital initiatives for global service providers through governance frameworks, agile execution, and cross‑functional leadership.";
const text2 = "Program Manager / Technical Project Manager with a track record of delivering large-scale, complex digital initiatives for global service providers through governance frameworks, agile execution, and cross-functional leadership.";
console.log("Original (with U+2011):", doc.splitTextToSize(text1, 200));
console.log("Clean (with U+002D):", doc.splitTextToSize(text2, 200));
