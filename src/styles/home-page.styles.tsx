import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HomePageHeader = styled.div`
    width: 100%;
    background: var(--primary-color);
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    gap: 5rem;
    
    .title {
        max-width: 50%;
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1;
    }

`

export const HomePageFormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-direction: column;
    padding: 2rem 0;

    .heading {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        max-width: 65%;
        font-weight: 700;
    }

    .title {
        font-size: 2rem;
        font-weight: 800;
    }

    .subtitle {
        font-size: 1.375rem;
    }
`