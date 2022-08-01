import styled from 'styled-components/macro';

export const StyledBudboTrax = styled.div`
    .width-wrapper > h2, .budbo-badge {
        color: var(--aqua);
    }
    .budbo-badge {
        & + h3 {
            @media (max-width: 767px) {
                font-size: 20px;
            }
        }
    }
    
`