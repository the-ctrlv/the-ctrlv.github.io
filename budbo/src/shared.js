import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #6E2DFA;
        --text-purple: #736B8E;
    }
    body {
        background-color: #F3F1F8;
        color: #000;
        font-weight: 500;
    }
    h1 {
        font-size: 72px;
    }
    h2 {
        font-size: 56px;
    }
    h3 {
        font-size: 32px;
        line-height: 38px;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: bold;
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
    .fw-semi-bold {
        font-weight: 600;
    }
    .btn-primary {
        background-color: var(--primary);
        border-radius: 8px !important;
    }
    .rounded {
        border-radius: 8px !important;
    }
    .cursor-pointer {
        cursor: pointer;
    }

`

export const StyledWhiteWrapper = styled.div`
    background-color: #fff;
    position: relative;
    width: calc(100vw - 64px);
    margin: 0 32px;
    padding: 54px;
    border-radius: 48px;
    margin-bottom: 90px;
    .notification-wrapper {
        top: -50%;
        transform: translateY(-50%);
    }
`

export const getClassNames = (...args) =>
    args.filter(Boolean).join(' ');

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};