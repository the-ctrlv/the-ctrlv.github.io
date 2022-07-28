import styled from 'styled-components/macro';

export const StyledBlockChainTechnology = styled.div`
    margin: 82px 0 300px;
    .blockchain-list {
        li {
            margin-bottom: 57px;
            h6 {
                font-size: 24px;
                line-height: 32px;
                font-weight: 700;
            }
            p {
                color: var(--text-purple);
                font-size: 20px;
                line-height: 28px;
                font-weight: 600;
                span {
                    color: #000;
                }
            }
            img {
                &:not(.logo) {
                    margin: 48px 0;
                    border-radius: 48px;
                }
            }
        }
    }
`