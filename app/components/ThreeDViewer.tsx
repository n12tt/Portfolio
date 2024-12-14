import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface ThreeDViewerProps {
  modelPath: string;
  altText: string;
  solidWorksPath: string;
  drawingPath: string;
  annotations?: { position: string; label: string }[];
}

const ThreeDViewer = ({ modelPath, altText, solidWorksPath, drawingPath, annotations = [] }: ThreeDViewerProps) => {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      <model-viewer
        src={modelPath}
        alt={altText}
        auto-rotate
        camera-controls
        className="w-full h-[500px] bg-gray-200 dark:bg-gray-900"
        environment-image="neutral"
        shadow-intensity="1"
      >
        {annotations.map((annotation, index) => (
          <button
            key={index}
            slot={`hotspot-${index}`}
            data-position={annotation.position}
            data-normal="0m 1m 0m"
            data-visibility-attribute="visible"
            className="annotation"
          >
            {annotation.label}
          </button>
        ))}

        {/* Download Icon Inside View Tray */}
        <button
          className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          title="Download Files"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faDownload} size="lg" />
        </button>

        {/* Dropdown Menu for Downloads */}
        {isDropdownOpen && (
          <div className="absolute bottom-16 right-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10">
            <a
              href={solidWorksPath}
              download
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              Download SolidWorks File
            </a>
            <a
              href={drawingPath}
              download
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              Download Drawing File
            </a>
          </div>
        )}
      </model-viewer>
    </div>
  );
};

export default ThreeDViewer;
