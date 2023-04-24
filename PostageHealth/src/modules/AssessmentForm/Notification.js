import Link from 'next/link';
import { useState } from 'react';
import Select from 'components/Select';
import MailForm from 'components/MailForm';
import { getClassNames } from 'shared';
import { StyledNotification } from './styles';

export default function Notification({ notificationType, setNotificationType, next }) {
	const [isStateFound, setIsStateFound] = useState(true);
	const [isStateChosen, setIsStateChosen] = useState(false);
	return (
		<StyledNotification
			className={getClassNames(
				'success',
				notificationType === 'success1' && !isStateFound && 'failed-no-state',
				notificationType === 'failed1' && 'failed',
			)}
		>
			{notificationType === 'success1' && (

				isStateFound ? (
					<div className="notification-content">
						<h1>What state are you from?</h1>
						<div className="notification-content__states">
							<Select variant="states" setIsStateChosen={setIsStateChosen} />
							<button
								type="button"
								className="btn"
								onClick={() => {
									setNotificationType(null);
									next();
								}}
								disabled={!isStateChosen}
							>
								<div className="title-wrapper">
									<span>Continue</span>
									<span>Continue</span>
								</div>
							</button>
						</div>

						<div
							className="notification-content__states__no-state"
							onClick={() => {
								setIsStateFound(false);
							}}
						>I don't see my state in the list
						</div>
					</div>
				) : (
					<div className="notification-content">
						<div className="notification-content__header">
							<Link href="/" className="back-home">
								Back home
							</Link>
							<span className="notification-content__line" />
						</div>

						<h1 className="sorry">SORRY</h1>
						<p>We do not work in your state, but you can leave your
							email to be notified when we start working in your state
						</p>
						<MailForm isNotification />
					</div>
				)

			)}
			{notificationType === 'failed1' && (
				<div className="notification-content">
					<h1 className="sorry">SORRY</h1>
					<p>Based on your response you do not qualify at this time.</p>
					<Link
						href="/"
						className="btn"
					>
						<div className="title-wrapper">
							<span>Back home</span>
							<span>Back home</span>
						</div>
					</Link>
					<span className="close" onClick={() => setNotificationType(null)} />
				</div>
			)}
			{notificationType === 'submitted' && (
				<div className="notification-content">
					<h1>Thanks</h1>
					<Link
						href="/"
						className="btn"
					>
						<div className="title-wrapper">
							<span>Back home</span>
							<span>Back home</span>
						</div>
					</Link>
				</div>
			)}
		</StyledNotification>
	);
}
