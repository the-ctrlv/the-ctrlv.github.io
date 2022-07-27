import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #6E2DFA;
        --text-purple: #736B8E;
    }
    body {
        background-color: #F3F1F8;
        color: #000;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    p {
        margin: 0;
    }
    .btn-primary {
        background-color: var(--primary);
        border-radius: 8px !important;
    }
    .rounded {
        border-radius: 8px !important;
    }import { styled } from 'styled-components/macro';

`

export const StyledWhiteWrapper = styled.div`
    background-color: #fff;
    width: calc(100vw - 64px);
    margin: 0 32px;
    padding: 54px;
    border-radius: 48px;
    
`