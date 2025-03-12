import React, { useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { FileText, Upload } from "lucide-react"; // Lucide icons
import { FilePreview, UploadButton, UploadContainer } from "@/components/form/form.styles";



const FileUploadRenderer = ({ data, handleChange, path }: ControlProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        handleChange(path, reader.result);
      };
      reader.readAsDataURL(file);
      console.log(file);
    }
  };

  return (
    <UploadContainer error={!data}>
      Resume/CV
      <UploadButton>
        <Upload size={18} />
        Upload PDF
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
      </UploadButton>

      {data && 
        <FilePreview>
          <FileText size={16} />
          <span>
            {fileName}
          </span>
        </FilePreview>
      }
    </UploadContainer>
  );
};

export default withJsonFormsControlProps(FileUploadRenderer);
