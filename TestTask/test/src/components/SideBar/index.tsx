import { getClassNames } from "../../shared/functions";
import { QuestionType } from "../../shared/types";
import { StyledHamburger, StyledSideBar } from "./styles";
import { ReactComponent as ImageBorderButton } from "../../assets/button-border.svg";
import { useClickOutside, useWindowResize } from "../../shared/hooks";
import { useEffect, useRef, useState } from "react";

type SideBarProps = {
	questionList: QuestionType[];
	currentQuestionNumber: number;
}

export default function SideBar(props: SideBarProps) {
	const { currentQuestionNumber, questionList } = props;

	const [isTablet, setIsTablet] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { width } = useWindowResize();
	const onHamburgerClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	useEffect(() => {
		setIsTablet(width <= 1024);
	}, [width]);

	const sideBarRef = useRef<HTMLDivElement>(null);

	useClickOutside(sideBarRef, () => { setIsMenuOpen(false) });
	return (
		<div ref={sideBarRef}>
			{isTablet &&
				<StyledHamburger onClick={onHamburgerClick}
					className={getClassNames('hamburger', isMenuOpen ? 'active' : '')}>
					<div className="hamburger__line"></div>
					<div className="hamburger__line"></div>
					<div className="hamburger__line"></div>
				</StyledHamburger>
			}
			<StyledSideBar className={getClassNames('side-bar', isMenuOpen ? 'active' : '')}>
				<div className="side-bar__container">
					{questionList.map((question, index) => (
						<div key={index}
							className={getClassNames('side-bar__item',
								index === currentQuestionNumber && 'side-bar__item--active',
								index < currentQuestionNumber && 'side-bar__item--inactive')}>
							<h4>{question.price}</h4>
							<ImageBorderButton />
						</div>
					))}
				</div>
			</StyledSideBar>
		</div>
	);
}