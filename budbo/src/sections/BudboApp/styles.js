import styled from 'styled-components/macro';

export const StyledBudboApp = styled.div`
    .budbo-img {
        transform: translateY(-45%);
        width: 100%;
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
        @media (max-width: 992px) {
            padding-top: 50px;
        }
    }
    .what-inside-title {
        margin-top: 95px;
    }
`