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
    position: relative;
    
    .title {
        max-width: 50%;
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1;
    }

    .profile {
        position: absolute;
        right: 2rem;
        top: 2rem;
        display: flex;
        gap: 1rem;
        align-items: center;
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
    max-width: 75rem;
    margin: 0 auto;

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

export const UserProfile = styled.div`
    width: 3rem;    
    height: 3rem;
    border-radius: 50%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
`;