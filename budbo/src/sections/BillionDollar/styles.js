import styled from 'styled-components/macro';

export const StyledBillionDollar = styled.div`
    .width-wrapper {
        p {
            &.text {
                font-weight: 500;
                margin: 32px 0 106px;
                span {
                    color: #000;
                }
            }
        }
        h2 {
            margin-top: 70px;
        }
        > img {
                margin: 48px 0;
                transform: scale(1.07);
        }
    }
`