import styled from 'styled-components'

export const MoreContentCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    box-shadow: #cbd5e1 1px 3px 3px 1px;
    border-radius: 10px;   
    background-color: var(--color-background);

    &:hover{
        box-shadow: 0.2rem 0.2rem 2rem rgb(0 0 0 / 25%);
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
            gap: 24px;
            .container-image{
                border: 1px solid var(--color-primary);
                box-shadow: #cbd5e1 1px 3px 3px 1px;
                border-radius: 10px;
                padding: 12px;
            }

            img{
                width: 72px;
                border-radius: 100%;
                margin: 12px;
            }
            .card-title{
                font-size: 1.5rem;
                font-weight: 600;
            }

            .content-container-example-text{
                p {
                    font-weight: 500;
                    font-size: 1.125rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-left: 8px ;
                }

            }

            
        }

        .more-content-complete{
            display: flex;
            flex-direction: row-reverse;
        }

        .content-card-categories-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
      
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