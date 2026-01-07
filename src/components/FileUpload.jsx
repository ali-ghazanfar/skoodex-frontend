import { useState, useRef } from 'react';
import { getLabelStyles, getErrorStyles } from '../utils/formStyles';
import { Upload, FileDocument, FilePdf, FileImage, Trash } from '../svgs';

const FileUpload = ({ label, error, value = [], onChange, className = '', accept = '*/*', maxSize = 10 * 1024 * 1024 }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const files = Array.isArray(value) ? value : [];

  const handleFileChange = (newFiles) => {
    const fileArray = Array.isArray(newFiles) ? newFiles : Array.from(newFiles || []);
    const validFiles = fileArray.filter(file => {
      if (file.size > maxSize) {
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles];
      onChange(updatedFiles);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleInputChange = (e) => {
    handleFileChange(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onChange(updatedFiles);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['pdf'].includes(ext)) {
      return <FilePdf className="w-6 h-6 text-red-500" />;
    }
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
      return <FileImage className="w-6 h-6 text-blue-500" />;
    }
    return <FileDocument className="w-6 h-6 text-gray-400" />;
  };

  return (
    <div className={className}>
      {label && (
        <label className={getLabelStyles()}>
          {label}
        </label>
      )}
      
      <div className="space-y-4">
        {/* Drag and Drop Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
            isDragging
              ? 'border-primary bg-primary/5'
              : error
              ? 'border-red-300 bg-red-50/50'
              : 'border-gray-300 bg-gray-50 hover:border-primary/50 hover:bg-gray-100/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple
            onChange={handleInputChange}
            className="hidden"
            id="file-upload"
          />
          <div className="flex flex-col items-center gap-3">
            <div className={`p-3 rounded-full ${
              isDragging ? 'bg-primary/10' : 'bg-gray-200'
            }`}>
              <Upload className={`w-6 h-6 ${isDragging ? 'text-primary' : 'text-gray-400'}`} />
            </div>
            <div>
              <label
                htmlFor="file-upload"
                className="text-sm font-medium text-primary cursor-pointer hover:underline"
              >
                Click to upload
              </label>
              <span className="text-sm text-gray-500"> or drag and drop</span>
            </div>
            <p className="text-xs text-gray-500">Max size {formatFileSize(maxSize)} per file</p>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    {getFileIcon(file.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="ml-3 p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
                  title="Delete file"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className={getErrorStyles()}>{error.message}</p>}
    </div>
  );
};

export default FileUpload;

