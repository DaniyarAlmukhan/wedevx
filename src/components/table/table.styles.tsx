import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TableFilters = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;  

  input,
  select {
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--secondary-color);
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  outline: 1px solid var(--secondary-color);
  border-radius: 0.5rem;

  thead {
    th {
      border-bottom: 1px solid var(--secondary-color);
      padding: 1rem;
      text-align: left;
      color: var(--secondary-color);

      .th {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }
    }
  }

  tbody {
    td {
      padding: 1rem;
      border-bottom: 1px solid var(--secondary-color);
    }

    tr:last-child {
      td {
        border-bottom: none;
      }
    }
   }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: transparent;

    &:disabled {
      color: var(--secondary-color);
    }

    &:focus {
      outline: none;
      }
  }

  .active {
    border: 1px solid var(--primary-color);
  }
`
