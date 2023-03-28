import styled from "styled-components";

export const PostElementStyled = styled.div`
    width: 60%;
    margin: 32px auto;
`
export const PostElementCreator = styled.div`
    display: flex;
    gap: 20px;
    margin: 12px;
    img{
        width: 72px;
        height: 72px;
    }
`
export const PostElementCreatorStats = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const PostElementCoin = styled.section`
    margin: 24px 12px;   
    
    width: fit-content;
    display: flex;
    gap: 6px;
    align-items: center;

    img{
        width: 36px;
        height: 36px;
    }

    h2{
        font-size: 1.25rem;
    }
    
`
export const PostElementCoinStats = styled.div`
    display: flex;
    gap: 12px;
    width: fit-content;
    align-items: center;
    a{
        display: flex;
        gap: 6px;
        text-align: center;
        align-items: center;
    }
`

export const PostElementCoinStatsName = styled.div`
    display: flex;
    gap: 6px;
    text-align: center;
    flex-direction: column;

`


export const PostElementBody = styled.section`
    margin: 36px 12px;

    .article-title{
        text-align: left;
        font-size: 44px;
        margin: 32px auto ;
    }

    .article-text{
        text-align: left;
        font-size: 1.375rem;
        font-weight: 400;
        color: #1e293b;
        margin: 0 auto;
    }

`

export const PostElementComments = styled.section`
    margin: 36px 12px;
`

export const PostElementLikes = styled.section`
    margin: 12px;
    font-size: 1.125rem;

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