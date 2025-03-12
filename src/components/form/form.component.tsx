import { JsonForms } from "@jsonforms/react";
import { FormContainer } from "@/components/form/form.styles";
import Button from "@/components/button/button.component";
import { useTranslations } from "next-intl";
import { JsonSchema, UISchemaElement, JsonFormsRendererRegistryEntry } from "@jsonforms/core";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { IValidationError } from "@/interfaces/types";

interface FormProps<T> {
  data: T;
  errors: IValidationError[];
  schema: JsonSchema;
  uiSchema: UISchemaElement;
  onChange: (data: T, errors: IValidationError[]) => void;
  onSubmit: () => void;
  renderers?: JsonFormsRendererRegistryEntry[];
}

export default function Form<T>({
  data,
  errors,
  schema,
  uiSchema,
  renderers = materialRenderers,
  onChange,
  onSubmit,
}: FormProps<T>) {
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
