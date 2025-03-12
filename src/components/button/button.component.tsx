import React, { ReactNode } from "react";
import { StyledButton } from "./button.styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  width?: string;
  maxWidth?: string;
}

export default function Button({ children, onClick, disabled, variant, ...props }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}