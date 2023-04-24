import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledMailForm = styled.form`
	position: relative;
	max-width: 350px;
	margin: 0 auto;
	.input-container {
		padding-top: 20px;
		margin-bottom: 10px;
		position: relative;
	}
	input {
		width: 100%;
		border-radius: 100px;
		background-color: rgba(7, 6, 15, 0.05);
		border: 1px solid transparent;
		padding: 16.5px 20px;
		&::placeholder {
			color: rgba(7, 6, 15, 0.6);
		}
		&:focus {
			outline: none;
		}
		&.valid {
			border: 1px solid #4BB543;
		}
		&.invalid {
			border: 1px solid #CA0B00;
		}
		&.submitted {
			&::placeholder {
				color: #4BB543;
				font-weight: 600;
			}
		}
	}
	.btn {
		width: 100%;
		padding: 17.5px 40px;
	}
	.validation-error {
		color: #CA0B00;
		position: absolute;
		left: 20px;
		top: 2px;
		font-size: 12px;
	}
	&.notification-mode {
		display: flex;
		justify-content: center;
		max-width: none;
		margin: 0;
		width: 100%;
		.input-container {
			padding-top: 0;
			margin-bottom: 0;
			margin-right: 16px;
			flex-grow: 1;
		}
		input {
			width: 100%;
			padding: 22.5px 40px;
			border: 1px solid #949896;
			background-color: transparent;
			border-radius: 100px;
			color: #fff;
			&::placeholder {
				color: #BEBFBE;
			}
		}
		.btn {
			max-width: 225px;
		}
		.validation-error {
			top: auto;
			bottom: -45px;
		}
		@media ${mqMax(breakpoints.md)} {
			flex-direction: column;
			.input-container {
				margin: 0 0 25px 0;
				input {
					padding: 16px 40px;
				}
			}
			.btn {
				max-width: none;
				padding: 16px 40px;
			}
		}
	}
`;
