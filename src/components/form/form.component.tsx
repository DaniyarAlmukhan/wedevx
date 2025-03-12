import { FormContainer } from "@/components/form/form.styles";
import { materialCells } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { useState } from "react";
import { renderers, schema, uiSchema } from "@/constants/form.constants";
import Button from "../button/button.component";
import { useTranslations } from "next-intl";

type ValidationError = { message?: string };

export default function Form() {
  const t = useTranslations();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log(errors);
    // TODO MOCK API
    if (errors.length === 0) {
      console.log(isFormSubmitted);
      setIsFormSubmitted(true);
      console.log(data);
    }
  }
  return <FormContainer>
    <JsonForms
      schema={schema}
      uischema={uiSchema}
      data={data}
      onChange={({ data, errors }) => {
        setData(data);
        setErrors(errors || [])  
      }}
      renderers={renderers}
      cells={materialCells}
      validationMode="ValidateAndShow"
    />

    <Button onClick={handleSubmit} variant="primary" disabled={!!errors.length}>
      {t("action.submit")}
    </Button>
  </FormContainer>;
}
