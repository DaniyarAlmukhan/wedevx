import { render, screen, fireEvent } from "@testing-library/react";
import { JsonForms } from "@jsonforms/react";
import FileUploadRenderer from "@/components/form/file-upload.renderer";

const mockHandleChange = jest.fn();

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key, 
}));

describe("FileUploadRenderer", () => {
  it("renders correctly when there is no data", () => {
    const mockData = 'data:application/pdf;base64,dummy content';
    render(
      <JsonForms
        data={mockData}
        renderers={[{ tester: () => 1, renderer: FileUploadRenderer }]}
        onChange={({ data }) => mockHandleChange(data)}
      />
    );

    expect(screen.getByText("form.CV")).toBeInTheDocument();
    expect(screen.getByText("action.uploadPdf")).toBeInTheDocument();
    expect(screen.queryByText("example.pdf")).not.toBeInTheDocument();
  });

  it("displays the file name after upload", async () => {
    const file = new File(["dummy content"], "example.pdf", { type: "application/pdf" });
    const mockData = 'data:application/pdf;base64,dummy content';
    render(
      <JsonForms
        data={mockData}
        renderers={[{ tester: () => 1, renderer: FileUploadRenderer }]}
        onChange={({ data }) => mockHandleChange(data)}
      />
    );
  
    const fileInput = screen.getByLabelText("action.uploadPdf");
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });
  
    expect(await screen.findByText("example.pdf")).toBeInTheDocument();
  });
  
});