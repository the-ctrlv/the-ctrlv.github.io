import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    background-color: #fff;
    padding: 64px 0;
    @media (max-width: 767px) {
        margin-top: 112px;
        border-radius: 48px 0 0 0;
        padding: 57px 0 40px;
    }
    .exchange {
        p {
            font-size: 14px;
        }
        .info {
            font-size: 12px;
            position: relative;
            &:before {
                content: '';
                display: block;
                width: 10px;
                height: 1px;
                background-color: #dee2e6;
                position: absolute;
                top: 50%;
                left: -16px;
            }
        }
    }
    .top-footer {
        padding-bottom: 64px;
        .download-links {
            @media (max-width: 767px) {
                img {
                    height: 48px;
                }
            }
        }
    }
    .footer-content {
        padding: 64px 0 40px;
        @media (max-width: 767px) {
            padding-bottom: 0;
            border-bottom: none !important;
            > ul {
                > li {
                    &:last-child {
                        padding-top: 48px;
                        border-top: 1px solid #dee2e6;
                    }
                }
            }
        }
        @media (min-width: 768px) and (max-width: 1200px) {
            >ul {
                >li {
                    &:last-child {
                        width: 70%;
                        margin: 25px auto 0;
                        text-align: center;
                    }
                    .social-media {
                        justify-content: center;
                    }
                }
            }
        }
    }
    .email-action {
        input {
            padding: 10px 24px;
            &::placeholder {
                color var(--text-purple);
                font-weight: bold;
            }
            &:focus-visible {
                outline: none;
            }
        }
        button {
            padding: 10px 24px;
        }
    }
    .social-media {
        display: flex;
        gap: 8px;
    }
    .bottom-footer {
        padding-top: 40px;
        h6 {
            @media (min-width: 992px) {
                text-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;   
            }
        }
    }
    .location  {
        font-size: 12px;
        color: var(--text-purple);
        padding: 5px 8px;
    }
`