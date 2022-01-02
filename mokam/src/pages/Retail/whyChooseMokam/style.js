import styled from 'styled-components'

export const StyledContentSlider = styled.div`
  overflow: hidden;
  display: flex;
  .media-container {
    width: 50%;
    overflow: hidden;
    transform: rotate(90deg);
    img {
      transform: rotate(-90deg);
    }
  }
  .text-container {
    width: 50%;
    div {
      margin: 10px 0;
    }
  }
  .slick-track {
    display: flex;
  }
`
