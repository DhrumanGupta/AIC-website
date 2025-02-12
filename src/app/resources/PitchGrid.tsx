"use client";

import PDFViewer from "@/components/PDFViewer";
import { File } from "@/lib/r2";
import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaFileExcel,
  FaFilePdf,
} from "react-icons/fa";

interface PitchGridProps {
  files: File[];
}

const getFileIcon = (url: string) => {
  if (url.endsWith(".pdf"))
    return <FaFilePdf className="text-red-500 w-12 h-12 mr-2" />;
  if (url.endsWith(".xls") || url.endsWith(".xlsx") || url.endsWith(".csv"))
    return <FaFileExcel className="text-green-500 w-12 h-12 mr-2" />;
  return <FaFileAlt className="text-gray-500 w-5 h-5 mr-2" />;
};

const PitchGrid: React.FC<PitchGridProps> = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {files.map((file) => (
          <div
            key={file.name}
            className="aspect-square md:aspect-video bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition-colors relative flex flex-col items-center justify-center hover:cursor-pointer"
            onClick={() => {
              if (window.innerWidth > 768) {
                setSelectedFile(file);
              } else {
                window.open(file.url, "_blank");
              }
            }}
          >
            {getFileIcon(file.url)}
            <h3 className="text-sm font-medium text-gray-800 truncate break-words text-wrap text-center mt-5">
              {file.name
                .replace(".pdf", "")
                .replace(".xls", "")
                .replace(".xlsx", "")
                .replace(".csv", "")}
            </h3>

            {/* <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:block hidden text-gray-500 hover:text-blue-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${file.name} in new tab`}
            >
              <FaExternalLinkAlt />
            </a> */}
          </div>
        ))}
      </div>
      {selectedFile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 h-5/6 max-w-4xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold truncate text-wrap">
                {selectedFile.name}
              </h2>

              <a
                href={selectedFile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="md:block hidden text-gray-500 hover:text-blue-500 transition-colors ml-auto mr-4"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${selectedFile.name} in new tab`}
              >
                <FaExternalLinkAlt />
              </a>
              <button
                onClick={() => setSelectedFile(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="flex-grow p-4">
              <PDFViewer url={selectedFile.url} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PitchGrid;
