import { FormContainer } from "@/styles/form.styles";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { useState } from "react";

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2, title: "First Name"},
    surname: { type: "string", minLength: 2, title: "Last Name"},
    email: { type: "string", format: "email", title: "Email Address" },
    linkedIn: { type: "string", format: "uri", title: "LinkedIn Profile" },
    visas: {
      type: "array",
      items: {
        type: "string",
        enum: ["O-1", "EB-1A", "EB-2 NIW", "I don't know"],
      },
      title: "Visas of Interest",
      uniqueItems: true,
    },
    fileUpload: { type: "string", contentMediaTyle: "application/pdf", title: "Resume/CV (PDF)" },
    additionalInfo: { type: "string", title: "Additional Information" },
  },
}

const uiSchema = {
  type: "VerticalLayout",
  elements: [
    { type: "Control", scope: "#/properties/name" },
    { type: "Control", scope: "#/properties/surname" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/linkedIn" },
    { type: "Control", scope: "#/properties/visas", options: { multi: true } },
    { type: "Control", scope: "#/properties/fileUpload", options: { accept: ".pdf", fileUpload: true } },
    { type: "Control", scope: "#/properties/additionalInfo", options: { multi: true } },
  ]
}

export default function Form() {
  const [data, setData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    // TODO MOCK API
    console.log(isFormSubmitted);
    setIsFormSubmitted(true);
  }
    return <FormContainer>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        onChange={({ data }) => setData(data)}
        renderers={materialRenderers}
        cells={materialCells}
        validationMode="ValidateAndShow"
      />

      <button onClick={handleSubmit}>
        Submit 
      </button>
    </FormContainer>;
  }
  