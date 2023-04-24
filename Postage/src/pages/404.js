import Link from 'next/link';
import styled from 'styled-components';

import { breakpoints, colors, mqMax } from 'shared';

import icon404 from '../assets/images/404.svg';

export default function Error404() {
	return (
		<StyledError404>
			<div className="content-container content-container--error">
				<h1>Oops! <br />
					Page <span>not found!</span>
				</h1>
				<p>
					Postage is the modern men's health platform that offers personalized
					care with data driven insights, licensed physician
				</p>
				<Link href="/" className="btn">
					<div className="title-wrapper">
						<span>BACK HOME</span>
						<span>BACK HOME</span>
					</div>
				</Link>
			</div>
		</StyledError404>
	);
}

const StyledError404 = styled.section`
	background-color: #080908;
	overflow: hidden;
	height: 100vh;
	.content-container {
		&--error {
			background: url(${icon404.src}) center center/contain no-repeat;
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: #fff;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 30vw;
			height: 30vw;
			background-color: ${colors.button};
			transform: translate3d(-50%,-50%,0);
			filter: blur(200px);
		}
	}
	h1 {
		margin-bottom: 20px;
	}
	p {
		color: #F3F3F3;
		opacity: 0.7;
		max-width: 450px;
		margin-bottom: 40px;
	}
	@media ${mqMax(breakpoints.md)} {
		.content-container {
			background-position: 0 25%;
			p {
				padding: 0 10px;
			}
			.btn {
				width: 70vw;
			}
			&::after {
				width: 60vw;
				height: 60vw;
				bottom: 0;
				top: auto;
				left: 50%;
				filter: blur(100px);
				transform: translate3d(-50%,30%,0);
			}
		}
	}
	@media ${mqMax(breakpoints.xl)} {
		.content-container {
			&::after {
				width: 70vw;
				height: 70vw;
			}
		}
	}
`;
