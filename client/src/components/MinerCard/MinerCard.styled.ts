import styled from 'styled-components'

export const MinerCardStyled = styled.div`

    display: flex;
    flex-direction: column;
    height: 360px;
    width: 300px;
    align-items: center;
    border-radius: 12px;

    border: 1px solid var(--color-primary);

    span{
        color: var(--color-muted-text);
        font-size: 0.825rem;
        font-weight: 500;
    }

    .miner-stats {
        p {
            font-size: 1rem;
            font-weight: 600;
        }
    }

    .acoes{
        display: flex;
        justify-content: space-between;
        gap: 30px;
        margin-top: 30px;
        
        .mine{

            text-align: center;

            button{
                background-color: var(--color-primary);
                width: 110px;
                height: 40px;
                border: none;
                border-radius: 8px;
                color: #ffffff;
            }

        }

        .upgrade{

            text-align: center;

            button{
                background-color: var(--color-red);
                width: 110px;
                height: 40px;
                border: none;
                border-radius: 8px;
                color: #ffffff;
            }

        }
        


    }

`