import Notification from '../../components/Notification';
import { StyledLegalization } from './styles';

function Legalization() {
    return (
        <StyledLegalization>
            <div className='container'>
                <div className='width-wrapper col-9'>
                    <h2 className='mb-5'>Continued Legalization.</h2>
                    <h3>
                        <span style={{ color: 'var(--primary)' }}>Many states are expected to include cannabis reform
                            initiatives</span> on the November 2022 ballots.
                        There are an estimated population of 16.7 million cannabis consumers in the 16 states that
                        have potential of legalization
                    </h3>
                    <h4 className='my-5'>European Union Movement Toward Legalization:</h4>
                    <p>With Malta’s December 2021 legalization of cannabis and the legalization in Germany and
                        Luxembourg, momentum has been growing for other countries to participate in the
                        decriminalization. Curaleaf, an American operator has already invested $285 million
                        dollars in EMMAC Life Sciences, a multinational European operator.1</p>
                    <h5 className='fw-semi-bold'>Budbo locations:</h5>
                </div>
                <Notification
                    title='As the market grows, a return on investment can blossom.'
                    description='This is your chance to get in early and reap the benefits.'
                    link='/'
                    linkText='Invest Now'
                    minimized
                />
            </div>
        </StyledLegalization>
    )
}

export default Legalization