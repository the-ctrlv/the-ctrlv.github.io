import styled from 'styled-components/macro';

export const StyledBudboApp = styled.div`
    .budbo-img {
        transform: translateY(-45%);
    }
    .budbo-title {
        margin-top: -260px;
        color: var(--primary);
    }
    .budbo-badge {
        display: block;
        font-size: 16px;
        color: var(--primary);
        margin-top: 65px; 
    }
    .what-inside-title {
        margin-top: 95px;
    }
    .inside {
        display: flex;
        margin-top: 32px;
        margin-bottom: 95px;
        li {
            height: 170px;
            border-radius: 16px;
            width: calc(50% - 16px);
            margin-bottom: 32px;
            padding: 0 48px;
        }
    }
`