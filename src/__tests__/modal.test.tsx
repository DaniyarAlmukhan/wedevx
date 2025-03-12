import Modal from "@/components/modal/modal.component";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("Modal", () => {
  it("renders children correctly", () => {
    render(
      <Modal onClose={jest.fn()}>
        <p>Test Modal Content</p>
      </Modal>
    );

    expect(screen.getByText("Test Modal Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking the overlay", () => {
    const mockOnClose = jest.fn();

    render(
      <Modal onClose={mockOnClose}>
        <p>Test Modal Content</p>
      </Modal>
    );

    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
