import reactSelect from 'react-select';
import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledSelect = styled(reactSelect)`
	&.select {
		text-align: left;
		.css-1s2u09g-control, .css-1pahdxg-control {
			border: none;
			border-radius: 100px;
			padding: 0 24px;
			height: 60px;
			box-shadow: none;
			background: rgba(255, 255, 255, 0.15);
			@media ${mqMax(breakpoints.md)} {
				height: 50px;
			}
		}
		.css-1fdsijx-ValueContainer {
			padding: 0;
		}
		.css-1dimb5e-singleValue {
			padding: 20px 40px;
			@media ${mqMax(breakpoints.md)} {
				padding: 20px 24px;
			}
			margin: 0;
			color: #fff;
		}
		.css-1jqq78o-placeholder {
			padding: 20px 40px;
			@media ${mqMax(breakpoints.md)} {
				padding: 20px 24px;
			}
			color: #a9a9a9;
			font-size: 14px;
		}
		
		.css-1okebmr-indicatorSeparator,
		.css-1u9des2-indicatorSeparator {
			display: none;
		}
		
		.css-13cymwt-control, .css-t3ipsp-control { 
			background-color: transparent;
			height: 58.09px;
			border-radius: 100px;
			border: 1px solid #949896;
			cursor: inherit;
			box-shadow: none;
			&:hover {
				border: 1px solid #fff;
			}
			&:focus {
				border: 1px solid ${colors.button};
			}
		}
		.css-319lph-ValueContainer,  .css-14el2xx-placeholder, .css-6j8wv5-Input  {
			padding: 0;
			margin: 0;
		}
		.css-1hb7zxy-IndicatorsContainer, .css-1wy0on6 {
			width: 50px;
		}
		.css-1xc3v61-indicatorContainer {
			&:hover {
				color: #fff;
			}
		}
		.css-tj5bde-Svg {
			color: #fff !important;
			transition: all 0.3s ease;
		}
		.css-1n6sfyn-MenuList {
			padding: 24px 0;
		}
		.css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
			svg {
				transition: all 0.3s ease;
				path {
					fill: #fff;
				}
			}
		}
		//options
		.css-1nmdiq5-menu {
			border-radius: 30px;
			z-index: 1;
			overflow: hidden;
			background: rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(10px);
			margin: 8px;
			width: calc(100% - 16px);
		}
		.css-10wo9uf-option {
			padding: 15px 40px;
			@media ${mqMax(breakpoints.md)} {
				padding: 20px 24px;
			}
			position: relative;
			&:active {
				background: inherit;
			}
			&:hover {
				
			}
		}
		.css-hlgwow, #react-select-select-input {
			padding: 0;
		}
		.css-d7l1ni-option {
			padding: 15px 40px;
			@media ${mqMax(breakpoints.md)} {
				padding: 20px 24px;
			}
			background: rgba(255, 255, 255, 0.05);
			cursor: inherit;
			&:active {
				background: inherit;
			}
		}
		.css-tr4s17-option {
			background: rgba(255, 255, 255, 0.05);
			padding: 15px 40px;
			@media ${mqMax(breakpoints.md)} {
				padding: 20px 24px;
			}
			position: relative;
			cursor: inherit;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 2px;
				background-color: #AFC2A8;
			}
			&:active {
				background: inherit;
			}
		}
		&.active {
			svg {
				transform: rotate(180deg);
			}
		}
	}
	&.invalid {
		.css-13cymwt-control, .css-t3ipsp-control { 
			border: 1px solid #CA0B00;
		}
	}
	&.scroll-to-select {
		width: 100%;
		margin-bottom: 30px;
		.css-1jqq78o-placeholder {
			padding: 17px 24px;
			color: #000;
			font-weight: 600;
			font-family: 'Montserrat';
		}
		.css-13cymwt-control,
		.css-t3ipsp-control {
			height: auto;
			background-color: #E4E6E5;
			border: none !important;
		}
		.css-1dimb5e-singleValue {
			padding: 17px 24px;
			font-family: 'Montserrat';
			color: #000;
			font-weight: 600;
			font-size: 14px;
		}
		.css-1xc3v61-indicatorContainer, .css-15lsz6c-indicatorContainer {
			svg {
				transition: all 0.3s ease;
				path {
					fill: #798C7F;
				}
			}
		}
		.css-1nmdiq5-menu { 
			backdrop-filter: blur(0);
			background-color: #E4E6E5;
		}
		.css-tr4s17-option {
			color: #AFC2A8;
		}
	}
	&.assessment-select {
		.css-tj5bde-Svg {
			color: #D9D9D9 !important;
		}
		.css-13cymwt-control, .css-t3ipsp-control { 
			&:hover {
				border-color: #687073;
			}
		}
		.css-1dimb5e-singleValue {
			color: #707572;
		}
		.css-1nmdiq5-menu {
			background-color: #E4E6E5;
			backdrop-filter: blur(0);
			z-index: 99999;
		}
		.css-tr4s17-option {
			color: #AFC2A8;
		}
		@media ${mqMax(breakpoints.lg)} {
			.css-13cymwt-control, .css-t3ipsp-control  {
				height: 50px;
			}
			.css-1jqq78o-placeholder, .css-1dimb5e-singleValue {
				padding: 17px 24px;
			}
			.css-1n6sfyn-MenuList {
				padding: 12px 0;
			}
			.css-1nmdiq5-menu {
				border-radius: 20px;
			}
			.css-d7l1ni-option,
			.css-10wo9uf-option {
				padding: 12px 24px;
			}
		}
	}
`;
