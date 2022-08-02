import styled from 'styled-components/macro';

export const StyledLegalization = styled.div`
    margin: 78px 0 0 0;
    padding-bottom: 148px;
    @media (max-width: 768px) {
        margin-bottom: 0;
        padding-bottom: 130px;
    }
    h4 {
        font-weight: 500;
    }
    h5 {
        font-weight: 600;
        margin-top: 80px;
    }
    .location-map {
        margin: 25px 0 70px;
        width: calc(100% + 16vw);
        transform: translateX(-8vw);
        @media (min-width: 1200px) {
            width: calc(100% + 16vw);
            transform: translateX(-8vw);
        }
        @media (max-width: 767px) {
            margin: -20px 0 -250px;
        }
    }
`