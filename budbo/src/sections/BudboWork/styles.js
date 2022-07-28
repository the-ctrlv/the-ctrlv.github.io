import styled from 'styled-components/macro';

export const StyledBudboWork = styled.div`
    h2 {
        margin-top: 148px;
    }
    .work-image {
        transform: translateX(-40px) scale(1.2);
        margin: 100px 0;
    }
    p {
        font-size: 20px;
        line-height: 28px;
        color: var(--text-purple);
        font-weight: 500;
    }
    .benefits {
        li {
            padding: 88px 48px;
            border-radius: 16px;
            margin-bottom: 32px;
            width: calc(50% - 16px);
            img {
                width: 30px;
                height: 30px;
            }
        }
    }
    
`