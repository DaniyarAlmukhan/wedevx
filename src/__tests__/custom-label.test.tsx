import CustomLabelRenderer from "@/components/form/custom-label.renderer";
import { LabelElement } from "@jsonforms/core";
import { render, screen } from "@testing-library/react";
import { useTranslations } from "next-intl";

// Mock next-intl's useTranslations hook
jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

describe("CustomLabelRenderer", () => {
  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue((key: string) => key);
  });

  it("renders correct icon and text for 'visa'", () => {
    const uischema: LabelElement = {
      type: "Label",
      text: "test",
      options: {
        labelType: "visa",
      },
    };

    render(<CustomLabelRenderer visible={true} uischema={uischema} />);

    expect(screen.getByTestId("visa-icon")).toBeInTheDocument();
    expect(screen.getByText("form.visa")).toBeInTheDocument();
  });

  it("renders correct icon and text for 'additional'", () => {
    const uischema: LabelElement = {
      type: "Label",
      text: "test",
      options: {
        labelType: "additional",
      },
    };

    render(<CustomLabelRenderer visible={true} uischema={uischema} />);

    expect(screen.getByTestId("additional-icon")).toBeInTheDocument();
    expect(screen.getByText("form.additional")).toBeInTheDocument();
  });

  it("renders with the default icon and text when no labelType", () => {
    const uischema: LabelElement = {
      type: "Label",
      text: "test",
      options: {},
    };

    render(<CustomLabelRenderer visible={true} uischema={uischema} />);

    expect(screen.getByTestId("default-icon")).toBeInTheDocument();
    expect(screen.getByText("form.default")).toBeInTheDocument();
  });

  it("does not render when no options and not visibel", () => {
    const uischema: LabelElement = {
      type: "Label",
      text: "test",
      options: {},
    };

    render(<CustomLabelRenderer visible={false} uischema={uischema} />);

    expect(screen.queryByTestId("default-icon")).not.toBeInTheDocument();
    expect(screen.queryByText("form.default")).not.toBeInTheDocument();
  });
});
