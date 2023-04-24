import MedicationsSwiper from 'components/MedicationSwiper';
import { StyledMedications } from './styles';

export default function Medications({ data }) {
	return (
		<StyledMedications className="medications mobile-blur">
			<div className="content-container">
				<div className="medications__title-wrapper fadeIn" data-scroll>
					<h2>{data.header.heading}</h2>
				</div>
			</div>
			<MedicationsSwiper medications={data.medication} />
		</StyledMedications>
	);
}
