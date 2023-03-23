import styled from 'styled-components'

export const ProfileActionsStyledBackground = styled.div`

`


export const ProfileActionsStyled = styled.div`
    
    min-width: 260px;
    height: fit-content;
    width: fit-content;
    background-color: var(--color-bright);
    right: 20px;
    top: 92px;
    z-index: 2;
    position: absolute;
    padding: 8px;
    box-shadow: var(--box-shadow-default);
    border-radius: 12px;
    cursor: default;

    h2{
        color: var(--color-primary);
        font-size: 1.25rem;
    }
    
`
export const ProfileActionsHeader = styled.div`
    display: flex;
    gap: 12px;
    width: fit-content;
    margin: 6px 6px 18px;

    .profile-action-informations{
        display: flex;
        flex-direction: column;
    }

    .profile-action-stats{
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .profile-action-balance{
        display: flex;
        gap: 4px;
        padding: 4px 8px;
        border-radius: 8px;
        background-color: var(--color-muted-background);
        align-items: center;
    
        font-weight: 500;

        img{
            width: 24px;
            height: 24px;
        }
    }
`

export const ProfileActionsBody = styled.div`
    margin: 18px 0px 6px;   

    ul{
        display: flex;
        flex-direction: column;

        li{
            padding: 8px 6px;
            cursor: pointer;

            &:hover{
                background-color: var(--color-muted-background);
                color: var(--color-primary-on-hover);
            }
        }

        .exit-btn{
            &:hover{
                background-color: var(--color-muted-background);
                color: var(--color-red);
            }
        }
    }
` 