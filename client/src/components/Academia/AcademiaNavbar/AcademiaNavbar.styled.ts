import styled from 'styled-components'

export const AcademiaNavbarStyled = styled.section`
    .nav-menu{
        display: flex;
        padding: 20px 20px;
        background-color: var(--color-background);
        border-bottom: 1px solid var(--color-secondary);
        gap: 40px;
    }

    .nav-menu-item{
        color: #64748b;
        transition: all 300ms ease;
        padding: 4px 12px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 400;
        flex-wrap: nowrap;
    }

    .nav-menu-item:hover{
        color: #2563eb;
    }

    .nav-menu-item2{
        margin: 0 24px;
        background-color: var(--color-background);
        border: 1px solid #2563eb;
        color: #2563eb;
        border-radius: 5px;
        padding: 4px 12px;
        transition: all ease 200ms;
    }

    @media screen and (max-width: 898px) {
        .nav-menu {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 5px;
            align-items: center;
        }
        
        .nav-menu li:first-child{
            grid-column: 1;
            grid-row: 1 / 3;
            
        }

        a.nav-menu-item2{
            display: flex;
            text-align: center;
            justify-content: center;
            margin: 0 2px;
            padding: 10px 10px;
            
        }
    }

    @media screen  and (max-width: 520px){
        .nav-menu {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 5px;
            align-items: center;
        }
        
        .nav-menu li:first-child{
            grid-column: 1;
            grid-row: 1 / 3;
            
        }

        a.nav-menu-item2{
            display: flex;
            text-align: center;
            margin: 0 2px;
            padding: 10px 10px;
        }
    }
`