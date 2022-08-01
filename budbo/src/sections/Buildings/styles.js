import styled from 'styled-components/macro';

import buildings from '../../assets/images/buildings.png';

export const StyledBuildings = styled.div`
    margin: 150px 0 350px;
    @media (max-width: 768px) {
        margin: 80px 0;
    }
    h1 {
        @media (max-width: 768px) {
            font-size: 48px;
            line-height: 56px;
        }
    }
    h3 {
        margin-top: 20px;
    }
    @media (min-width: 768px) {
        h3 {
            margin-top: 48px;    
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            z-index: -1;
            bottom: 50%;
            transform: translateY(60%);
            height: 2300px;
            width: 100vw;
            background: url(${buildings}) right center/contain no-repeat;
        }   
    }
`