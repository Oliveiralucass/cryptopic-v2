import styled from 'styled-components'

export const LoginStyled = styled.form`
    position: absolute;
    left: 50%;
    top: 49.6%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 30px;
    background-color: #ffffff;
    border-radius: 12px;

    label {
        display: flex;
        flex-direction: column;
        font-size: 0.825rem;
        font-weight: 500;
        color: var(--color-muted-text);
        gap: 4px;
    }
    
    input{
        border: none;
        outline: none;
        padding: 12px;
        width: 360px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1rem;
        background-color: var(--color-muted-background);
    }

    input[type=submit] {
        background-color: var(--color-primary);
        color: var(--color-background);
        cursor: pointer;
        transition: 150ms all ease-in-out;

        &:hover{
            background-color: var(--color-primary-on-hover);
        }
    }
    .separator{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: var(--color-muted-text);
        font-weight: 400;
        hr{
            width: 40%;
            color: var(--color-muted-text);
            background-color: var(--color-muted-text);
        }
    }

    button{
        color: var(--color-primary);
        transition: 150ms all ease-in-out;
        cursor: pointer;
        padding: 12px;
        width: 360px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1rem;
        background-color: var(--color-secondary);
        border: none;
        &:hover {
            transition: 150ms all ease-in-out;
            background-color: var(--color-secondary-on-hover);
        }
    }
`

export const SignupStyled = styled.form`
     position: absolute;
    left: 50%;
    top: 49.6%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 30px;
    background-color: #ffffff;
    border-radius: 12px;

    label {
        display: flex;
        flex-direction: column;
        font-size: 0.825rem;
        font-weight: 500;
        color: var(--color-muted-text);
        gap: 4px;
    }
    
    input{
        border: none;
        outline: none;
        padding: 12px;
        width: 360px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1rem;
        background-color: var(--color-muted-background);
    }

    input[type=submit] {
        background-color: var(--color-primary);
        color: var(--color-background);
        cursor: pointer;
        transition: 150ms all ease-in-out;

        &:hover{
            background-color: var(--color-primary-on-hover);
        }
    }
    .separator{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: var(--color-muted-text);
        font-weight: 400;
        hr{
            width: 40%;
            color: var(--color-muted-text);
            background-color: var(--color-muted-text);
        }
    }

    button{
        color: var(--color-primary);
        transition: 150ms all ease-in-out;
        cursor: pointer;
        padding: 12px;
        width: 360px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1rem;
        background-color: var(--color-secondary);
        border: none;
        &:hover {
            transition: 150ms all ease-in-out;
            background-color: var(--color-secondary-on-hover);
        }
    }
`