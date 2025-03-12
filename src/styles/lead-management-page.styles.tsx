import styled from "styled-components";

export const LeadManagementPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

export const LeadsManagementSidebar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, var(--primary-color) 0%, #fff 100%);
  justify-content: space-between;
  padding: 20px;

  .top {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .logo {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .menu {
    ul {
      list-style: none;
      li {
        padding: 0.625rem 0;
        font-size: 1rem;
        cursor: pointer;

        &.selected {
          font-weight: bold;
        }
      }
    }
  }

  .bottom {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`

export const LeadsManagementContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const LeadDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  gap: 1rem;
  h2 {
    margin-bottom: 12px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    margin-top: 5px;
  }

  select:focus {
    outline: none;
    border-color: #666;
  }

  .buttons {

    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`;
