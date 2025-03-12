import styled from "styled-components";

export const StyledButton = styled.button<{variant?: "primary" | "secondary"}>`
  height: 3rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`