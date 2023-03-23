import styled from 'styled-components'

export const ProfileInfosStyled = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin: 10px;
`
export const ProfileInfoUsername = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px 0 8px;
    font-weight: 500;
    color: var(--color-primary);
    cursor: pointer;

    a{
        width: fit-content;
    }

    &:hover{
        color: var(--color-primary-on-hover);
    }
`
export const ProfileInfoLevel = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    padding: 0 4px 0 8px;
    p{
        font-weight: 500;
    }
    
    span{
        font-weight: 400;
    }
`
export const ProfileInfoBalance = styled.div`
    display: flex;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: var(--color-muted-background);
    align-items: center;
    width: 200px;
    font-weight: 500;

    img{
        width: 24px;
        height: 24px;
    }
`
export const ProfileInfoImage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;

    img{
        width: 64px;
        height: 64px;
    }
` 