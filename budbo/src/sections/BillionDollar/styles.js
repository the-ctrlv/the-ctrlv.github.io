import styled from 'styled-components/macro';

export const StyledBillionDollar = styled.div`
    .width-wrapper {
        p {
            font-size: 20px;
            line-height: 28px;
            color: var(--text-purple);
            font-weight: 700;
            span {
                color: #000;
            }
            &.text {
                font-weight: 500;
                margin: 32px 0 106px;
                span {
                    color: #000;
                }
            }
        }
        h2 {
            margin-top: 160px;
        }
        > img {
                margin: 48px 0;
                transform: scale(1.07);
        }
    }
`