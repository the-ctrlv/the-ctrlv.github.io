import styled from 'styled-components/macro';

import buildings from '../../assets/images/buildings.png';

export const StyledBuildings = styled.div`
    margin-top: 150px;
    margin-bottom: 350px;
    p {
        font-size: 32px;
        line-height: 39px;
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
`