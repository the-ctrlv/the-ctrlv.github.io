import styled from 'styled-components/macro';

export const StyledBudboUnique = styled.div`
    h2 {
        &.transformed {
            margin-top: -70px;
            margin-bottom: 30px;
        }
        &.margin-top {
            margin-top: 120px;
        }
    }
    p {
        &:first-of-type {
            font-size: 32px;
            line-height: 38px;
        } 
        &:nth-of-type(2),
        &:nth-of-type(3) {
            font-size: 20px;
            margin-top: 32px;
            color: var(--text-purple);
            line-height: 28px;
            span {
                color: #000;
            }
        }
    }
    .unique-img {
        margin: 80px 0;
    }
    .unique-features {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        margin: 32px 0 47px;
        li {
            border-radius: 16px;
            width: calc(50% - 16px);
            margin-bottom: 32px;
            padding: 44px;
            img {
                width: 30px;
                height: 30px;
            }
            p {
                margin-top: 16px;
                line-height: 24px;
                font-size: 16px;
                color: var(--text-purple);
            }
            &:last-child {
                transform: translateX(calc(50% + 16px));
            }
        }
    }
    .cannabis-data {
        margin: 108px 0;
        li {
            margin-bottom: 120px;
            h3 {

        }
        img {
            margin: 48px 0;
        }
        p {
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            margin-bottom: 32px;
            &.secondary {
                color: var(--text-purple);
            }
        }
        }
    }
`