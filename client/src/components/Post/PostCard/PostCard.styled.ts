import styled from 'styled-components'

export const PostCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 100px auto;
    padding: 12px;
    border-radius: 6px;
    width: 50%;
    box-shadow: var(--box-shadow-medium);
`

export const PostCardHeader = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: 8px;
    
    a{
        width: fit-content;
    }
    
    img{
        width: 40px;
        height: 40px;
    }

    .user-info{
        display: flex;
        gap: 12px;
        align-items: center;
    }

    strong{
        color: var(--color-primary)
    }

    span{
        font-weight: 500;
        font-size: 1.125rem;
    }
`

export const PostCardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 8px;
`
export const PostCardBodyHeader = styled.div`
    .coin-info a{
        width: fit-content;
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0 0 8px;

        img{
            width: 24px;
            height: 24px;
        }
    }

    h1{
        font-size: 28px;
    }
`


export const PostCardBodyMessage = styled.div`
    max-height: 320px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    font-size: 1.25rem;

`

export const PostCardInteractions = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin: 8px;

    .likeButton {
      display: flex;
      gap: 6px;
      align-items: center;

      svg:hover{
        cursor: pointer;
        fill: var(--color-primary-on-hover);
      }
    }
`