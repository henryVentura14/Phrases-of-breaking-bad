import React from 'react';
import styled from '@emotion/styled'
const ContentPhrase = styled.div`
    padding: 3rem;
    border-radius: .1rem;
    background-color: transparent;
    max-width:800px;
    border:solid 2px black;    
    @media (min-width: 992px) {
        margin-top: 10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        color:white;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: white;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: white;
        margin-top: 2rem;
    }
`;
const Phrase = ({ phrases }) => {
    return (
        <ContentPhrase>
            <h1>{phrases.quote}</h1>
            <p>{phrases.author}</p>
        </ContentPhrase>
    );
}

export default Phrase;