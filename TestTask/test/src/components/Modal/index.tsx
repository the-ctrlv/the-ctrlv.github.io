import { StyledModal } from "./styles";
import imageHand from "../../assets/hand.png";

type ModalProps = {
	isGameFinished: boolean;
	reset: () => void;
	totalEarned: string;
};

export default function Modal({ isGameFinished, reset, totalEarned }: ModalProps) {
	return (
		<StyledModal>
			<div className="modal__content">
				<img src={imageHand} alt="hand" />
				<div className="modal__content__text">
					{isGameFinished && <span>Total score:</span>}
					<h2>{isGameFinished ? `${totalEarned} earned` : 'Who wants to be a millionaire?'}</h2>
					<button onClick={reset}>{isGameFinished ? 'Try again' : 'Start'}</button>
				</div>
			</div>
		</StyledModal>
	);
}