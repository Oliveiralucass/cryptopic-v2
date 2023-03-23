import styled from 'styled-components'

export const ProfileElementStyled = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const ProfileElementHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ProfileElementHeaderTop = styled.div`
    margin-top: 60px;
    img{
        width: 124px;
    }
    display: flex;
    justify-content: space-between;
`

export const ProfileElementHeaderTopLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const ProfileElementHeaderTopLeftInfos = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 12px;
`   

export const ProfileElementHeaderTopLeftStats = styled.div`
    font-size: 1.125rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 12px;
    strong{
        color: var(--color-primary);
    }
`

export const ProfileElementHeaderTopRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
export const ProfileElementTopRightContentCard = styled.div`
    border: 1px solid transparent;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    gap: 12px;
    background-color: var(--color-secondary);
    border-radius: 6px;
    transition: all ease 200ms;
    color: var(--color-primary);
    cursor: default;

    &:hover{
        border: 1px solid var(--color-primary-on-hover);
        color: var(--color-primary-on-hover);
        background-color: var(--color-secondary-on-hover);
    }
    

    
`

export const ProfileElementHeaderBottom = styled.div`
    display: flex;
    gap: 32px;
    margin: 0 auto;
    flex-wrap: wrap;
`

export const ProfileElementHeaderBottomCoinCard = styled.div`
    display: flex; 
    width: 200px;
    border: 1px solid var(--color-primary-on-hover);
    align-items: center;
    gap: 12px;
    padding: 8px;
    font-weight: 500;
    border-radius: 8px;
    
    img{
        width: 40px;
        height: 40px;
    }
`

export const ProfileElementBody = styled.div`

`