import Select from 'react-select'
import styled from 'styled-components'

export const StyledMokamSelect = styled(Select)`
  height: 44px;
  margin-top: 5px;
  > div {
    &:first-of-type {
      height: 100%;
      box-shadow: none;
      cursor: pointer;
      border: solid 1px #b3b3b3;
      &.css-1pahdxg-control {
        border: 1px solid #0046a0;
      }
    }
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-4ljt47-MenuList {
    padding: 0;
  }
  .css-26l3qy-menu {
    margin: 2px 0;
    overflow: hidden;
    .css-4ljt47-MenuList {
      max-height: 150px;
      overflow-y: scroll;
      div {
        padding: 13px;
      }
    }
  }
  .css-1n7v3ny-option {
    cursor: pointer;
  }
  .css-1n7v3ny-option {
    background-color: #b3b3b33d;
  }
  .css-14el2xx-placeholder {
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 500;
  }
  .css-tj5bde-Svg {
    path {
      color: #4d4d4d;
    }
  }
`
