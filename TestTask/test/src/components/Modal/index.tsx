import { useRef } from "react";

import { StyledModal } from "./styles";

import imageHand from "../../assets/hand.png";


type ModalProps = {
	isGameFinished: boolean;
	reset: () => void;
	totalEarned: string;
	setIsGameFinished: (isGameFinished: boolean) => void;
	setIsModalVisible: (isModalVisible: boolean) => void;
};

export default function Modal({
	isGameFinished,
	setIsModalVisible,
	setIsGameFinished,
	reset,
	totalEarned }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	return (
		<StyledModal ref={modalRef} className='modal visible'>
			<div className="modal__content">
				<img src={imageHand} alt="hand" />
				<div className="modal__content__text">
					{isGameFinished && <span>Total score:</span>}
					<h1>{isGameFinished ? `${totalEarned} earned` : 'Who wants to be a millionaire?'}</h1>
					<button className="btn" onClick={() => {
						reset();
						setIsGameFinished(false)
						setIsModalVisible(false)
					}
					}>{isGameFinished ? 'Try again' : 'Start'}</button>
				</div>
			</div>
			<div className="modal__polygon" />
		</StyledModal>
	);
}