import styled from 'styled-components'

export const StyledThanksPage = styled.div`
  .thanks {
    position: relative;
    margin-top: 80px;
    padding: 70px 0;
    .width-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        max-width: 450px;
      }
      h2 {
        margin: 50px 0 15px;
      }
      .subtitle {
        margin-bottom: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    .thanks {
      .width-wrapper {
        img {
          max-width: 190px;
        }
      }
    }
  }
`
