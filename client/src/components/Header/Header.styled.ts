import styled from 'styled-components'

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    max-height: 94px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-secondary);
    background-color: var(--color-background);

    .logo-navbar{
        display: flex;
        gap: 40px;

        .logo{
            display: flex;
            gap: 4px;
            align-items: center;

            img{
                width: 40px;
                height: 40px;
            }
            
            h1{
                font-size: 1.875rem;
                font-weight: 600;
            }
        }
    }

    .balance{
        display: flex;
        gap: 20px;
        margin-right: 40px;

        h1{
            color: var(--color-primary);
        }

        span h1{
            color: var(--text-color);
        }
        
        .login-button{
            cursor: pointer;
            font-weight: 500;
            font-size: 1.125rem;
            color: var(--color-primary);
            &:hover{
                color: var(--color-primary-on-hover);
            }
        }
            
    }
`