"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
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

  const pageWidth = Math.min(windowWidth - 64, 800);

  return (
    <div className="pdf-viewer w-full max-w-4xl mx-auto flex flex-col h-full">
      <div className="flex-grow relative bg-white rounded-lg shadow-lg overflow-hidden">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            className="max-h-full"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16 flex items-center justify-between px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className={cn(
              "text-gray-600 hover:text-gray-900 transition-colors duration-200",
              pageNumber <= 1 && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Previous page"
          >
            ←
          </button>
          <span className="text-sm text-gray-600">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() =>
              setPageNumber(Math.min(numPages || 0, pageNumber + 1))
            }
            disabled={pageNumber >= (numPages || 0)}
            className={cn(
              "text-gray-600 hover:text-gray-900 transition-colors duration-200",
              pageNumber >= (numPages || 0) && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Next page"
          >
            →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PDFViewer;
