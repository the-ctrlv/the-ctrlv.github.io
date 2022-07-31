import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro'

import token from './assets/images/token.svg';

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #6E2DFA;
        --text-purple: #736B8E;
        --orange: #FF9644;
        --aqua: #30C6FF;
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
    .text-body {
        color: #000 !important;
    }
    p {
        margin: 0;
        font-size: 20px;
        line-height: 28px;
    }
    .fw-semi-bold {
        font-weight: 600;
    }
    .text-primary {
        color: var(--primary) !important;
    }
    .text-colored {
        color: var(--text-purple);
        font-weight: 500;
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
    .table {
        transform: translateX(-120px);
        margin: 68px 0;
    }
    .with-indent {
        position: relative;
        margin-left: 40px;
        &::before {
            content: '';
            background-color: var(--text-purple);
            position: absolute;
            top: 9px;
            left: -20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
        }
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

    .sticky-container {
        height: 100%;
        right: 0;
        top: 0;
        div {
            padding-top: 54px;
        }
    }

    .notification-wrapper {
        top: -50%;
        transform: translateY(-50%);
    }
    .video-container {
        position: relative;
        z-index: 1;
        iframe {
            transform: translateX(-120px);
            border-radius: 24px;
        }   
        &::before {
                content: '';
                display: block;
                width: 109px;
                height: 120px;
                background: url(${token}) center center/cover no-repeat;
                position: absolute;
                left: 0;
                top: -150px;
                z-index: -1;
            }     
    }
`

export const StyledColoredWrapper = styled.div`
    background-color: #F1EAFE;
    padding: 95px 48px 0;
    margin-bottom: 185px;
    border-radius: 48px;
    transform: translateX(-120px);
    p {
        &.text {
            margin: 25px 0 100px
        }
    }
    .uma-img {
        width: 80%;
        margin: 0 auto 66px;
    }
    .with-indent {
        &::before {   
            box-shadow: none;
        }
    }
    .connect-img {
        transform: translateY(-10%);
    }
    &.connect {
        padding-top: 0;
        margin-bottom: 290px;
        background-color: #FFF5EC;
        h3 {
            span {
                color: var(--orange);
            }
        }
    }
    &.trax {
        padding-top: 0;
        background-color: #EAF9FF;
        margin: 350px 0 300px;
        h3 {
            span {
                color: var(--aqua);
            }
        }
        .transformed {
            margin-top: -220px;
        }
        .trax-img {
            width: 90%;
            margin: 0 auto;
            transform: translateY(-28%);
        }
        .what-inside-title {
            margin-top: 80px;
        }
    }
`

export const StyledInsideUl = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 32px;
    margin-bottom: 95px;
    li {
        height: 170px;
        border-radius: 16px;
        width: calc(50% - 16px);
        margin-bottom: 32px;
        padding: 0 48px;
    }
    &.trax {
        margin-bottom: 10px;
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

export function useMobileMode() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth < 768;
}