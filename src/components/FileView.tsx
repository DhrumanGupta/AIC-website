"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaFileAlt, FaFilePdf } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface FileViewProps {
  name: string;
  url: string;
}

const FileView: React.FC<FileViewProps> = ({ name, url }) => {
  const [showModal, setShowModal] = useState(false);

  const FileIcon = url.endsWith(".pdf") ? FaFilePdf : FaFileAlt;

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-lg shadow-md p-4 flex items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200 overflow-hidden"
      >
        <FileIcon className="text-gray-500 mr-2 flex-shrink-0" />
        <span className="flex-grow truncate min-w-0">{name}</span>
        <FaExternalLinkAlt
          className="text-gray-500 hover:text-blue-500 ml-2 flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            window.open(url, "_blank");
          }}
        />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 h-5/6 max-w-4xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold truncate">{name}</h2>
              <IoMdClose
                className="text-2xl cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="flex-grow p-4">
              <iframe src={url} title={name} className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileView;
