import styled from 'styled-components';
import { breakpoints, mqMax } from 'shared';
import iconCalendar from 'assets/icons/icon-calendar.svg';
import BGSuccess from 'assets/images/notification-success-bg.jpg';
import BGFailedNoState from 'assets/images/notification-failed-nostate-bg.jpg';
import BGFailed from 'assets/images/notification-failed-bg.jpg';
import IconClose from 'assets/icons/icon-close.svg';

export const StyledAssessmentForm = styled.form`
	width: 100%;
	.button-container {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
	.btn {
		min-width: 225px;
		position: relative;
		&--outline {
			color: #080908;
			border-color: #080908;
			&:hover {
				box-shadow: none;
			}
		}
		&::after {
			content: '';
			display: block;
			width: 8px;
			height: 8px;
			border-left: 1px solid #fff;
			border-bottom: 1px solid #fff;
			position: absolute;
		}
		&--next {
			&::after {
				transition: right 0.2s ease-in-out;
				transform: rotate(225deg);
				right: 25%;
				top: 27px;
				@media ${mqMax(breakpoints.md)} {
					top: 21.5px;
				}
			}
			&:hover {
				&::after {
					right: 15%;	
				}
			}
		}
		&--prev {
			
			&::after {
				top: 26px;
				transition: left 0.2s ease-in-out;
				border-color: #080908;
				transform: rotate(45deg);
				left: 25%;
			}
			&:hover {
				&::after {
					left: 15%;
				}
			}
		}
		&--complete {
			&::after {
				display: none;
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
		.button-container {
			margin-top: 50px;
			flex-direction: column-reverse;
			align-items: center;
			button {
				max-width: 225px;
			}
		}
	}
`;

export const StyledQuestion = styled.div`
	&.date-question {
		position: relative;
		z-index: 1;
	}
	padding: 50px 60px;
	background-color: #F3F3F3;
	border-radius: 25px;
	margin-bottom: 16px;
	position: relative;
	input[type="text"] {
		&:focus {
			border-color: #798C7F;
			border-width: 2px;
		}
	}
	h3 {
		font-size: 18px;
		color: #091417;
		line-height: 25.2px;
		margin-bottom: 30px;
		span {
			color: #C57C5D;
		}
	}

	.radio-label {
		display: block;
		cursor: pointer; 
		user-select: none;
		text-align: left;
		&+.radio-label {
			margin-top: 30px;
			@media ${mqMax(breakpoints.lg)} {
				margin-top: 20px;
			}
		}
		input{
			display: none;
			&+span{
				display: inline-block; 
				position: relative;
				padding-left: 35px;
				font-weight: 500;
				&:before{
					content: '';
					display: block; 
					position: absolute;
					top: -5px;
					left: 0px;
					border-radius: 50%;
					margin-right: 5px;
					width: 22px;
					height: 22px;
					border: 2px solid #C5CAC5;
					background: #fff;
				}
				&:after{
					content: '';
					display: block; 
					width: 10px;
					height: 10px;
					background: #798C7F;
					position: absolute;
					border-radius: 50%;
					top: 3px;
					left: 8px;
					opacity: 0;
					transform: scale(0,0); 
					transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
				}
			}
			&:checked+span {
				&:after {
					opacity: 1;
					transform: scale(1,1);
				}
				&:before {
					border: 2px solid #798C7F;
				}
			}
		}
	}

	.text-input, .react-datepicker__input-container input {
		width: 100%;
		padding: 20px 30px;
    color: #707572;
    font-size: 16px;
		background-color: transparent;
    height: 56px;
    border-radius: 100px;
    border: 1px solid #949896;
    cursor: inherit;
    box-shadow: none;
	}

	.multiple-text-label {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		border-radius: 100px;
		padding: 9px 24px;
		border: 1px solid #949896;
		cursor: pointer;
		margin-bottom: 12px;
		h4 {
			font-size: 16px;
			color: #707572;
			font-weight: 400;
			margin-right: 20px;
			position: relative;
			&::after {
				content: '';
				display: block;
				position: absolute;
				right: -20px;
				top: 50%;
				width: 1px;
				height: 36px;
				transform: translateY(-50%);
				background-color: #949896;
			}

		}
		input {
			height: 36px;
			flex-grow: 1;
			background-color: transparent;
			border: none;
			padding-left: 20px;
			color: #707572;
			font-size: 16px;
			&:focus {
				box-shadow: none;
				&+h4 {
					color: #080908;
				}
			}
		}
		&--error {
			border-color: #C57C5D;
			h4 {
				color: #C57C5D;
			}
		}
	}
	.checkbox-label {
		cursor: pointer;
		.checkbox {
			display: none;
			&+span {
				display: inline-block;
				position: relative;
				padding-left: 35px;
				font-weight: 500;
				
				&:before {
					content: '';
					display: block;
					position: absolute;
					top: 0px;
					left: 0px;
					border-radius: 4px;
					margin-right: 5px;
					width: 22px;
					height: 22px;
					border: 2px solid #C5CAC5;
				}
				&:after {
					content: '';
					display: block;
					width: 14px;
					height: 6px;
					border-left: 3px solid #798C7F;
					border-bottom: 3px solid #798C7F;
					position: absolute;
					top: 5px;
					left: 6px;
					opacity: 0;
					transform: scale(0,0);
					transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);

				}
			}
			&:checked+span {
				&:after {
					opacity: 1;
					transform: scale(1,1) rotate(-45deg);
				}
				&:before {
					border: 2px solid #798C7F;
				}
			}
		}
		h5 {
			font-size: 16px;
			font-weight: 500;
			padding-left: 34px;
		}
	}
	.error-message {
		color: #C57C5D;
		font-size: 12px;
		position: absolute;
		left: 60px;
		bottom: 20px;
	}


	.react-datepicker-wrapper {
		.react-datepicker__input-container {
			input {
				width: 100%;
			}
			&::after {
				content: '';
				display: block;
				position: absolute;
				right: 20px;
				top: 50%;
				width: 25px;
				height: 25px;
				transform: translateY(-50%);
				background: url(${iconCalendar.src}) center center/cover no-repeat;
			}
		}
	}
	.react-datepicker {
		border-radius: 16px;
		background-color: #F3F3F3;
		border: none;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		&__header {
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			border-bottom: none;
			border-radius: 16px 16px 0 0;
			padding: 11px 0;
			&::after {
				content: '';
				display: block;
				position: absolute;
				left: 5%;
				width: 90%;
				height: .75px;
				background-color: #C5CAC7;
				bottom: 0;
			}
		}
		&__navigation-icon {
			&::before {
				width: 6px;
				height: 6px;
				border-width: 2px 2px 0 0;
				top: 50%;
			}
			&--previous {
				&::before {
					transform: translateY(-50%) rotate(225deg);
				}
			}
			&--next {
				&::before {
					transform: translateY(-50%) rotate(45deg);
				}
			}
		}
		&__month-text--keyboard-selected, 
		&__quarter-text--keyboard-selected,
		 &__year-text--keyboard-selected {
			background-color: transparent
		 }
		&__day {
			color: #080908;
			font-family: 'Inter', sans-serif;
			&:hover {
				background-color: #C8D1CB;
				opacity: 0.5;
				border-radius: 50px;
			}
			&--selected {
				background-color: #C8D1CB;
				border-radius: 50px;
			}
			&--keyboard-selected {
				background-color: transparent;
			}
		}
		&__month {
			margin: 11px;
		}
	}

	@media ${mqMax(breakpoints.lg)} {
		padding: 24px 24px 35px 24px;
		border-radius: 16px;
		h3 {
			font-size: 16px;
			margin-bottom: 20px;
		}
		.text-input {
			padding: 15px 20px;
			font-size: 14px;
			height: 50px;
		}
		.multiple-text-label {
			height: 50px;
			h4 {
				font-size: 12px;
				margin-right: 10px;
				white-space: nowrap;
				&::after {
					right: -9px;
					height: 30px;
				}
			}
			input {
				width: 130px;
				font-size: 12px;
				padding-left: 5px;
				&::placeholder {
					display: none;
					color: transparent;
				}
			}
		}
		.error-message {
			left: 24px;
			bottom: 10px;
		}
	}
	
`;

export const StyledNotification = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	overflow: hidden;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	&.success {
		background: url(${BGSuccess.src}) center center/cover no-repeat;
	}
	&.failed-no-state {
		background: url(${BGFailedNoState.src}) center center/cover no-repeat;
		.back-home {
			position: relative;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			font-size: 14px;
			margin-left: 16px;
			color: #fff;
			&::after {
				content: '';
				display: block;
				width: 8px;
				height: 8px;
				border-left: 1px solid #fff;
				border-bottom: 1px solid #fff;
				position: absolute;
				top: 4px;
				transition: left 0.2s ease-in-out;
				border-color: #fff;
				transform: rotate(45deg);
				left: -15%;
			}
			&:hover {
				&::after {
					left: -25%;
				}
			}
		}
	}
	&.failed {
		background: url(${BGFailed.src}) center center/cover no-repeat;
		.close {
			height: 46px;
			width: 46px;
			position: absolute;
			right: -80px;
			top: -80px;
			background: url(${IconClose.src}) center center/cover no-repeat;
			@media ${mqMax(breakpoints.md)} {
				top: 20px;
				right: 20px;
			}
		}
	}
	.notification-content {
		text-align: center;
		max-width: 585px;
		width: 100%;
		position: relative;
		@media ${mqMax(breakpoints.md)} {
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			width: 100%;
			top: -60px;
			@media ${mqMax(breakpoints.md)} {
				top: 30px;
				width: calc(100% - 60px);
				left: 20px;
			}
		}
		&__line {
			flex-grow: 1;
			margin-left: 20px;
			display: block;
			height: 1px;
			background-color: #fff;
		}

		h1 {
			color: #FFF;
			font-size: 38px;
			font-weight: 600;
			margin-bottom: 20px;
			font-family: 'Montserrat', sans-serif;
			&.sorry {
				font-size: 50px;
			}
			top: 0;
			span {
				font-weight: 700;
			}
			&::after {
				content: none;
			}
		}
		p {
			color: #F3F3F3;
			font-size: 14px;
			margin-bottom: 24px;
			line-height: 22.4px;
		}
		&__states {
			display: flex;
			flex-grow: nowrap;
			.select {
				flex-grow: 1;
				margin-right: 16px;
				.css-10wo9uf-option {
					color: #f3f3f387;
				}
				.css-d7l1ni-option {
					color: #fff;
				}
			}
			&__no-state {
				text-align: center;
				margin-top: 15px;
				opacity: 0.7;
				color: #F3F3F3;
				cursor: pointer;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
	@media ${mqMax(breakpoints.md)} {
			
			.notification-content {
				padding: 0 40px;
				width: 100%;
				h1 {
					font-size: 22px;
					&.sorry {
						font-size: 32px;
					}
				}
				&__states {
					flex-direction: column;
					width: 100%;
					.select {
						margin: 0 0 16px 0;
						.css-13cymwt-control,
						.css-t3ipsp-control {
							height: 50px;
							.css-1jqq78o-placeholder {
								padding: 16px 24px;
							}
						}
					}
				}
			}
		}
`;
