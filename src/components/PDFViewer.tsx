"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PDFViewerProps {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer w-full max-w-4xl mx-auto flex flex-col h-full">
      <div className="flex-grow relative bg-gray-100 rounded-lg shadow-inner">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Page
            pageNumber={pageNumber}
            width={
              windowWidth > 768
                ? Math.min(windowWidth - 64, 800)
                : windowWidth - 32
            }
            className="max-h-full"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          className="text-gray-600 hover:text-gray-900 disabled:text-gray-300 transition-colors duration-200"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <p className="text-sm text-gray-600">
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= (numPages || 0)}
          className="text-gray-600 hover:text-gray-900 disabled:text-gray-300 transition-colors duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
