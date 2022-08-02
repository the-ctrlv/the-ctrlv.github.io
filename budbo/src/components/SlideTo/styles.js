import styled from 'styled-components/macro';

export const StyledSlideTo = styled.div`
    margin-top: 60px;
    margin-bottom: 80px;
    .actions {
        div {
            cursor: pointer;
            span {
                font-size: 12px;
                font-weight: bold;
                color: var(--text-purple);
            }
            &.active {
                background-color: #F1EAFE;
                span {
                    color: var(--primary);
                }
            }
        }
    }
`