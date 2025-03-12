import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";
import { StyledTextArea } from "@/components/form/form.styles";

const TextAreaRenderer = ({ data, handleChange, path, visible }: ControlProps) => {
  if (!visible) return null;

  return (
    <StyledTextArea
      value={data || ""}
      onChange={(e) => handleChange(path, e.target.value)}
      rows={8}
      className="custom-textarea" 
    />
  );
};

export default withJsonFormsControlProps(TextAreaRenderer);
