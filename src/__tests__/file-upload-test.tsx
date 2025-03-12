import { render, screen, fireEvent } from "@testing-library/react";
import { JsonForms } from "@jsonforms/react";
import FileUploadRenderer from "@/components/form/file-upload.renderer";
import { ControlProps } from "@jsonforms/core";

const mockHandleChange = jest.fn();

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,  // Mock the `t` function to just return the key
}));

describe("FileUploadRenderer", () => {
  it("renders correctly when there is no data", () => {
    render(
      <JsonForms
        data={null}
        renderers={[{ tester: () => 1, renderer: FileUploadRenderer }]}
      />
    );

    expect(screen.getByText("action.uploadPdf")).toBeInTheDocument();
    expect(screen.queryByText("example.pdf")).not.toBeInTheDocument();
  });

  it("calls handleChange when a file is selected", () => {
    const file = new File(["dummy content"], "example.pdf", { type: "application/pdf" });

    render(
      <JsonForms
        data={null}
        renderers={[{ tester: () => 1, renderer: FileUploadRenderer }]}
      />
    );

    const fileInput = screen.getByLabelText("UploadButton");
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });

    expect(mockHandleChange).toHaveBeenCalledWith(
      "#/properties/file",
      expect.any(String)  
    );
  });

  it("displays the file name after upload", () => {
    const mockData = "data:application/pdf;base64,examplebase64string";

    render(
      <JsonForms
        data={mockData}
        renderers={[{ tester: () => 1, renderer: FileUploadRenderer }]}
      />
    );

    expect(screen.getByText("example.pdf")).toBeInTheDocument();
  });
});
