import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75rem;
    padding: 1rem;

      .MuiInputBase-root {
        border-radius: 0.5rem;
    }

    .MuiFormGroup-root.MuiFormGroup-row {
        display: flex;
        flex-direction: column;

        svg path {
            fill: var(--primary-color);
        }
    }
`;

export const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    resize: none;

    &:focus {
        outline: none;
    }
`

export const UploadContainer = styled.div<{ error?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 2px dashed var(--primary-color);
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 400px;
  text-align: center;

  ${({ error }) => error && `
    border-color: red;
  `}
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: var(--primary-color);
  color: #000;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
  
  &:hover {
    background-color: var(--primary-color);
  }
  
  input {
    display: none;
  }
`;

export const FilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  font-size: 14px;
  color: #444;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;