import styled from "styled-components";

export const StyledButton = styled.button<{ variant?: "primary" | "secondary" | "clean" | 'success' | 'danger', width?: string, maxWidth?: string }>`
  height: 3rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }

  ${({ variant }) => variant === 'clean' && `
    background-color: transparent;
    color: #000;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  `}

  ${({ variant }) => variant === 'success' && `
    background-color: #28a745;

    &:hover {
      background-color: #218838;
    }
  `}
`