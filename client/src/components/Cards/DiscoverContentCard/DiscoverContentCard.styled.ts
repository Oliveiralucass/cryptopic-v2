import styled from 'styled-components'

export const DiscoverContentCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    box-shadow: #cbd5e1 1px 3px 3px 1px;
    border-radius: 10px;
    transition: all 150ms ease-in-out;

    &:hover{
        box-shadow: #cbd5e1 4px 12px 12px 4px;
    }
    

    .content-card-container{
        margin: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        .container-image-title{
            display: flex;
            flex-direction: column;
            gap: 16px;
            .container-image{
                border: 1px solid var(--color-primary);
                box-shadow: #cbd5e1 1px 3px 3px 1px;
                border-radius: 10px;
            }

            img{
                width: 72px;
                border-radius: 100%;
                margin: 12px;
            }
            .card-title{
                margin-left: 12px;
                font-size: 1.75rem;
                font-weight: 500;
            }
        }


        .content-card-categories-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 12px;
      
            .content-card-stat-container{
                display: flex;
                gap: 6px;

                .content-card-stat{
                    display: flex;
                    gap: 6px;
                }
            }
        }
    }
`