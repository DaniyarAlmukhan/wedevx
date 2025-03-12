import React, { ReactNode } from "react";
import { StyledButton } from "./button.styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, disabled, variant }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </StyledButton>
  );
}