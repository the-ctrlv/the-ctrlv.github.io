import styled from 'styled-components'
export const StyledModal = styled.div`
	& {
		position: fixed;
		height: 100vh;
		width: 100vw;
		pointer-events: none;
		background-color: #fff;
		opacity: 0;
		visibility: hidden;
		z-index: 1050;
		display: flex;
		align-items: center;
		justify-content: center;
		&.visible {
			pointer-events: all;
			opacity: 1;
			visibility: visible;
		}
	}
	.modal {
		&__content {
			display: flex;
			&__text {

			}
		}
	}
`