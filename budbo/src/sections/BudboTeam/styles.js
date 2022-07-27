import styled from 'styled-components/macro';

export const StyledBudboTeam = styled.div`
    padding: 86px 0;
    .roadmap {
        margin: 65px 0 135px;
        &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 1px;
            background-color: #E0DBED;
        }
        li {
            position: relative;
            padding-left: 45px;
            margin-bottom: 55px;
            p {
                line-height: 45px;
                color: var(--text-purple);
            }
            &::after {
                content: '';
                display: block;
                position: absolute;
                z-index: 1;
                top: 9px;
                left: 0;
                transform: translateX(-50%);
                width: 13px;
                height: 13px;
                background-color: var(--primary);
                border-radius: 50%;
            }
        }
    }
    h2 {
        span {
            color: var(--primary);
        }
    }
    .team {
        margin: 54px 0 100px;
        h4 {
            font-size: 20px;
        }
        span {
            font-size: 16px;
            margin: 8px 0 16px;
            color: var(--text-purple);
        }
        p {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: var(--text-purple);
        }
        li {
            width: calc((100% / 4) - 1.8vw);
            margin-bottom: 1.8vw;
            padding: 32px 0 86px;
        }
    }
    .faq {
        height: 260px;
        margin-top: 70px;
        li {
            p {
                max-height: 0;
                overflow: hidden;
                padding-bottom: 0;
                transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
            }
            img {
                transform: rotate(0);
                transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s;
            }
            &.active {
                p {
                    max-height: 100px;
                    padding-bottom: 20px;
                    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s;
                }
                img {
                    transform: rotate(-180deg);
                    transition: cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s;
                }
            }
        }
    }
`