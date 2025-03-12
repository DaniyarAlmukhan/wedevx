import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/form/form.component";
import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import { IValidationError } from "@/interfaces/types";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("Form component", () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  const schema: JsonSchema = {
    type: "object",
    properties: {
      name: { type: "string" },
    },
  };

  const uiSchema: UISchemaElement = {
    type: "Control",
    scope: "#/properties/name",
  };

  const data = { name: "John Doe" };
  const errors: IValidationError[] = [];

  it("render correctly with data", () => {
    render(
      <Form
        data={data}
        errors={errors}
        schema={schema}
        uiSchema={uiSchema}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByText("action.submit")).toBeInTheDocument();
    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
  });

  it("call onSubmit when the button is clicked", () => {
    render(
      <Form
        data={data}
        errors={errors}
        schema={schema}
        uiSchema={uiSchema}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const button = screen.getByText("action.submit");
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it("disable the submit button if there are validation errors", () => {
    const errorData = { name: "" };
    const validationErrors: IValidationError[] = [{ message: "Name is required", path: "#/properties/name" }];

    render(
      <Form
        data={errorData}
        errors={validationErrors}
        schema={schema}
        uiSchema={uiSchema}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const button = screen.getByText("action.submit");
    expect(button).toBeDisabled();
  });

  it("calls onChange when input changes", () => {
    render(
      <Form
        data={data}
        errors={errors}
        schema={schema}
        uiSchema={uiSchema}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    const input = screen.getByDisplayValue("John Doe");
    fireEvent.input(input, { target: { value: "Jane Doe" } });
    expect(input.value).toBe("Jane Doe");
    
  });
});
