import { useContext, useEffect, useRef, useState } from 'react';

import Select from 'components/Select';

import { getClassNames, useClickOutside, useWindowResize } from 'shared';
import { AnimateStartContext, SmoothScrollContext } from 'shared/context';
import { POLICYNAV } from 'shared/helpers';

import { StyledPrivacyTerms } from 'styles/privacy-terms';

function NavItem({ i, item, locoScroll }) {
	const [isActive, setIsActive] = useState(false);
	const clickRef = useRef(null);

	useClickOutside(clickRef, () => {
		setIsActive(false);
	});

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<li
			key={i}
			ref={clickRef}
			className={getClassNames(
				'content-start--horizontal',
				isActive && 'active'
			)}
			onClick={() => {
				locoScroll?.scrollTo(item.scrollTo);
				setIsActive(true);
			}}
		>
			<h2>{item.label}</h2>
		</li>
	);
}

export default function TermsOfUse() {
	const [isTabletMode, setIsTabletMode] = useState(null);
	const { width } = useWindowResize();

	const { gsapScroll, locoScroll } = useContext(SmoothScrollContext);
	const { isAnimationFinished } = useContext(AnimateStartContext);

	const gsap = gsapScroll?.gsap;
	const ScrollTrigger = gsapScroll?.ScrollTrigger;

	const triggerRef = useRef(null);

	useEffect(() => {
		if (isAnimationFinished) {
			gsap?.to(
				'.content-start',
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.2,
				}
			);
			if (!isTabletMode) {
				gsap?.to(
					'.content-start--horizontal',
					{
						delay: 0.8,
						opacity: 1,
						x: 0,
						duration: 0.8,
						stagger: 0.2,
					}
				);
			}
		}
	}, [gsap, isAnimationFinished, isTabletMode]);

	useEffect(() => {
		if (width !== 0 && width > 1024 && triggerRef.current) {
			// setTimeout(() => {
			ScrollTrigger?.create({
				trigger: triggerRef.current,
				start: '-80px top',
				end: 'bottom 40%',
				pin: '.left-nav-pane',
			});
			// }, 100);
		} else {
			ScrollTrigger?.getAll().forEach((instance) => {
				instance.kill();
			});
		}
	}, [ScrollTrigger, width, triggerRef]);

	useEffect(() => {
		if (width === 0) return;
		setIsTabletMode(width < 1024);
	}, [width]);

	return (
		<StyledPrivacyTerms>
			<div
				className="section-title-wrapper"
			>
				<h1 className="content-start">Terms of use</h1>
			</div>
			<div
				className="content-container terms-content flex-between"
				id="termsContent"
			>
				{isTabletMode
					? <Select variant="policy-terms" />
					: (
						<div className="height-container" ref={triggerRef}>
							<ul
								className="terms-content__left-pane left-nav-pane"
							>
								{POLICYNAV.map((item, i) => (
									<NavItem key={i} item={item} locoScroll={locoScroll} />
								))}
							</ul>
						</div>
					)}
				<div className="terms-content__right-pane right-nav-pane">
					<h2 className="content-start">Getting older isn't always a walk in the park.
						But that doesn't mean it has to be an uphill battle.
					</h2>
					<p className="content-start">
						Postage was created to deliver a higher standard of wellbeing for men of every age.
						Through continuous, consultative care, sophisticated solutions, and a streamlined service model,
						we make it easy to rediscover the best version of you.
						<br /> <br />
						Postage was created to deliver a higher standard of wellbeing for men of every age.
						Through continuous, consultative care, sophisticated solutions, and a streamlined service model,
						we make it easy to rediscover the best version of you.Postage was created to deliver a higher
						standard
						of wellbeing for men of every age. Through continuous, consultative care,
						sophisticated solutions, and
						a streamlined service model, we make it easy to rediscover the best version
						of you.Postage was created
						to deliver a higher standard of wellbeing for men of every age. Through
						continuous, consultative care,
						sophisticated solutions, and a streamlined service model, we make it easy
						to rediscover the best version of you.
						<br /> <br />
						Postage was created to deliver a higher standard of wellbeing for men of every age.
						Through continuous, consultative care, sophisticated solutions, and a streamlined service model,
						we make it easy to rediscover the best version of you.Postage was created
						to deliver a higher standard
						of wellbeing for men of every age. Through continuous, consultative care,
						sophisticated solutions, and
						a streamlined service model, we make it easy to rediscover the best version
						of you.Postage was created
						to deliver a higher standard of wellbeing for men of every age. Through continuous,
						consultative care, sophisticated solutions,
						and a streamlined service model, we make it easy to rediscover the best version of you.
					</p>
					<h3 className="content-start">Postage was created to deliver a higher
						standard of wellbeing for men of every age.
					</h3>
					<p className="content-start">
						Postage was created to deliver a higher standard of wellbeing for men of every age.
						Through continuous,
						consultative care, sophisticated solutions, and a streamlined service model, we make it easy
						to rediscover
						the best version of you.
						<br /> <br />
						Postage was created to deliver a higher standard of wellbeing for men of every age.
						Through continuous, consultative care, sophisticated solutions, and a streamlined service model,
						we make it easy to rediscover the best version of you.
						Postage was created to deliver a higher standard
						of wellbeing for men of every age. Through continuous, consultative care,
						sophisticated solutions, and a streamlined service model, we make it easy to
						rediscover the best version of you.Postage was created to deliver a higher standard of
						wellbeing for men of every age. Through continuous, consultative care, sophisticated solutions,
						and a streamlined service model, we make it easy to rediscover the best version of you.
					</p>
					<h3>Postage was created to deliver a higher standard:</h3>
					<ol>
						<li>
							<p>Postage was created to deliver</p>
						</li>
						<li>
							<p>Through continuous, consultative care, sophisticated solutions,
								and a streamlined service model,
								we make it easy to rediscover the best version of you.
							</p>
						</li>
						<li>
							<p>Through continuous, consultative care, sophisticated solutions,
								and a streamlined service model,
								we make it easy to rediscover the best version of you.  Sophisticated
								solutions, and a streamlined
								service model, we make it easy to rediscover the best version.
							</p>
						</li>
					</ol>
					<h3>Postage was created to deliver a higher standard:</h3>
					<ol className="orange">
						<li>
							<p>Postage was created to deliver</p>
						</li>
						<li>
							<p>Through continuous, consultative care, sophisticated solutions,
								and a streamlined service model,
								we make it easy to rediscover the best version of you.
							</p>
						</li>
						<li>
							<p>Through continuous, consultative care, sophisticated solutions,
								and a streamlined service model,
								we make it easy to rediscover the best version of you.  Sophisticated
								solutions, and a streamlined
								service model, we make it easy to rediscover the best version.
							</p>
						</li>
					</ol>
				</div>

			</div>
		</StyledPrivacyTerms>
	);
}
