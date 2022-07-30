import styled from 'styled-components/macro';

export const StyledBudboConnect = styled.div`
    h2, .budbo-badge {
        color: var(--orange);
    }
    .width-wrapper {
        > ul {
            margin-bottom: 148px;
        }
    }
    ul {
        li {
            height: 120px;
            border-radius: 16px;
            width: calc(50% - 16px);
            margin-bottom: 32px;
            padding: 0 48px;
        }
    }
`