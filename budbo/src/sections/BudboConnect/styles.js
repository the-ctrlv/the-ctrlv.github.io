import styled from 'styled-components/macro';

export const StyledBudboConnect = styled.div`
    .width-wrapper > h2, .budbo-badge {
        color: var(--orange);
    }
    .width-wrapper {
        > ul {
            margin-bottom: 148px;
        }
        h5 {
            &:last-of-type {
                @media (max-width: 1199px) {
                    margin-bottom: 148px !important;
                }
            }
        }
    }
    ul {
        li {
            height: 120px;
            border-radius: 16px;
            width: calc(50% - 16px);
            margin-bottom: 32px;
            padding: 0 48px;
            @media (max-width: 768px) {
                height: 64px;
            }
        }
    }
`