import styled from "styled-components";

export const StyledButton = styled.button<{variant?: "primary" | "secondary", width?: string, maxWidth?: string}>`
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
`