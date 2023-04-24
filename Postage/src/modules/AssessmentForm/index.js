/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';

import { getClassNames, useMultiStepForm } from 'shared/hooks';
import { useContext, useEffect, useState } from 'react';
import { SmoothScrollContext } from 'shared/context';

import assessmentData from './data/assessment.json';

import { StyledAssessmentForm } from './styles';
import Notification from './Notification';
import Questions from './Questions';

export default function AssessmentForm({
	setNotificationType,
	setIsStepCompleted,
	setCurrentFormStep,
	isStepCompleted,
	notificationType,
}) {
	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
		getValues,
		trigger,
		setValue,
	} = useForm({
		mode: 'onChange',
	});

	const [triggerMultipleQuestions, setTriggerMultipleQuestions] = useState(false);
	const [currentPoints, setCurrentPoints] = useState(0);
	const currentValues = getValues();
	const { locoScroll, gsapScroll } = useContext(SmoothScrollContext);

	const { next, prev, currentStepIndex, isLastStep, isFirstStep } =
		useMultiStepForm(assessmentData.pages);
	const gsap = gsapScroll?.gsap;

	useEffect(() => {
		gsap?.to('.content-start', {
			opacity: 1,
			y: 0,
			duration: 0.8,
			stagger: 0.5,
		});
		setCurrentFormStep(currentStepIndex);
	}, [currentStepIndex]);

	useEffect(() => {
		setTimeout(() => {
			locoScroll?.scrollTo('top', {
				offset: 0,
				duration: 0,
				disableLerp: true
			});
		}, 100);
	}, [currentStepIndex, locoScroll]);

	const onSubmit = async (data, e) => {
		e.preventDefault();
		console.log(data);
	};

	useEffect(() => {
		setIsStepCompleted(currentPoints >= 3);
	}, [currentPoints, setIsStepCompleted, isStepCompleted]);

	useEffect(() => {
		console.log(currentValues);
	}, [currentValues]);

	useEffect(() => {
		if (currentPoints < 0) {
			setCurrentPoints(0);
		}
		console.log(currentPoints);
	}, [currentPoints]);

	return (
		<>
			{notificationType !== null && (
				<Notification
					next={next}
					notificationType={notificationType}
					isStepCompleted={isStepCompleted}
					setIsStepCompleted={setIsStepCompleted}
					setNotificationType={setNotificationType}
				/>
			)}
			<StyledAssessmentForm id="assessment-form" onSubmit={handleSubmit(onSubmit)}>

				<Questions
					control={control}
					assessmentData={assessmentData.pages[currentStepIndex].elements}
					currentValues={currentValues}
					setValue={setValue}
					errors={errors}
					register={register}
					currentPoints={currentPoints}
					setCurrentPoints={setCurrentPoints}
					triggerMultipleQuestions={triggerMultipleQuestions}
				/>

				<div className="button-container fadeIn" data-scroll>
					{!isFirstStep && (
						<button
							onClick={prev}
							className="btn btn--outline btn--prev"
							type="button"
						>
							<div className="title-wrapper">
								<span>Previous</span>
								<span>Previous</span>
							</div>
						</button>
					)}
					<button
						className={getClassNames('btn btn--black btn--next', isLastStep && 'btn--complete')}
						onClick={() => {
							trigger().then((isValid) => {
								if (isValid && isFirstStep) {
									if (isStepCompleted) {
										setNotificationType('success1');
									} else {
										setNotificationType('failed1');
									}
									return;
								}
								if (!isValid) {
									setTriggerMultipleQuestions(true);
									setTimeout(() => {
										setTriggerMultipleQuestions(false);
									}, 100);
									locoScroll?.scrollTo(`#${Object.keys(errors)[0]}`, {
										offset: -100,
									});
								}
								if (isLastStep && isValid) {
									console.log(currentValues);
									setNotificationType('submitted');
									return;
								}
								if (isValid) {
									next();
								}
							});
						}}
						type="button"
					>
						<div className="title-wrapper">
							<span>{isLastStep ? 'Complete' : 'Next'}</span>
							<span>{isLastStep ? 'Complete' : 'Next'}</span>
						</div>

					</button>
				</div>
			</StyledAssessmentForm>
		</>
	);
}
