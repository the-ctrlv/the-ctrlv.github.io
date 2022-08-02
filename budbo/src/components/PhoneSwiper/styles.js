import styled from 'styled-components/macro';

export const StyledPhoneSwiper = styled.ul`
    margin-top: 50px;
    @media (min-width: 768px) {
        margin-top: 80px;
    }
    > div {
        img {
            /* width: calc(100% - 64px); */
            width: 100%;
            margin: 0 auto;
            display: block;
            @media (max-width: 767px) {
                width: 80%;
            }
            @media (min-width: 768px) {
                height: 80%;
                width: 80%;
            }
        }
        &:nth-child(2) {
            img {
                width: 100%;
            }
        }
    }
    p {
        font-size: 14px;
        color: var(--text-purple);
        font-weight: 500;
        bottom: -50px;
        span {
            text-decoration: underline;
        }
    }
    .desktop-wrapper {
        margin: 25px 0;
        .swiper {
            width: 300px;
        }
    }
`