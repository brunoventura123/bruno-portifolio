import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    background: #16384c;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding-bottom: 50px;

    h2#projects{
        padding: 0;
        margin:0 ;
        margin-bottom: 30px;
        padding-top: 50px;
        font-size: 35px;
        color: #FFF;
        text-align: center;
        height: 50px;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    @media (max-width: 650px) {
        .container{
            width: 320px;
        }
        h2#projects{
            font-size: 23px;
        }
    }
`