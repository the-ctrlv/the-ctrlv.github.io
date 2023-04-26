import styled from 'styled-components';


export const StyledQuestion = styled.div`
	width: calc(100vw - 376px);
	/* height: 100vh; */
	`

export const StyledQuestionButton = styled.li`
	&.disabled {
		pointer-events: none;
	}
	&.selected {
		background-color: #f8f8f8;
	}
	&.correct {
		background-color: #d4f5d4;
	}
	&.incorrect {
		background-color: #f5d4d4;
	}
`