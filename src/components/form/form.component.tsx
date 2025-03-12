import { JsonForms } from "@jsonforms/react";
import { FormContainer } from "@/components/form/form.styles";
import Button from "@/components/button/button.component";
import { useTranslations } from "next-intl";
import { JsonSchema, UISchemaElement,  JsonFormsRendererRegistryEntry } from "@jsonforms/core";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { ValidationError } from "@/interfaces/types";

interface FormProps {
  data: Record<string, string | string[]>;
  errors: ValidationError[];
  schema: JsonSchema;
  uiSchema: UISchemaElement;
  onChange: (data: Record<string, unknown>, errors: ValidationError[]) => void;
  onSubmit: () => void;
  renderers?: JsonFormsRendererRegistryEntry[];
}

export default function Form({
  data,
  errors,
  schema,
  uiSchema,
  renderers = materialRenderers,
  onChange,
  onSubmit,
}: FormProps) {
  const t = useTranslations();

  return (
    <FormContainer>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={data}
        onChange={({ data, errors }) => onChange(data, errors || [])}
        renderers={renderers}
        cells={materialCells}
        validationMode="ValidateAndShow"
      />

      <Button onClick={onSubmit} variant="primary" disabled={errors.length > 0}>
        {t("action.submit")}
      </Button>
    </FormContainer>
  );
}
