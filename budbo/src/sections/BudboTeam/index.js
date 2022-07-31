import { useMobileMode } from '../../shared';
import Accordion from './Accordion';
import { mockBudboTeam } from './mockBudboTeam';
import { StyledBudboTeam } from './styles';

function BudboTeam() {
    const isMobileMode = useMobileMode();

    return (
        <StyledBudboTeam>
            {isMobileMode ? <h2 className='mb-5'>Continued LegalizaWhat’s Next for You and Budbo/Budbo Roadmaption</h2>
                :
                <h2 className='mb-4'>
                    What’s Next for You and <br />
                    Budbo/Budbo Roadmap
                </h2>
            }
            <ul className='roadmap position-relative'>
                <li>
                    <h4 className='mb-3'>2022</h4>
                    <p className='mb-3 mb-lg-0'>
                        Worldwide customer-facing Budbo app release
                    </p>
                    <p className='mb-3 mb-lg-0'>
                        US and Canada Budbo Connect/dispensary onboarding
                    </p>
                </li>
                <li>
                    <h4 className='mb-3'>2023</h4>
                    <p>
                        Israel, Germany, Luxembourg Budbo Connect/dispensary onboarding
                    </p>
                    <p>
                        Budbo Trax release
                    </p>
                </li>
                <li>
                    <h4 className='mb-3'>2024</h4>
                    <p>On-going worldwide expansion...</p>
                </li>
            </ul>

            <div className='team-wrapper'>
                <h2 className='text-center'>Meet the <span>Budbo Team</span></h2>
                <ul className='d-flex flex-wrap team justify-content-between'>
                    {mockBudboTeam.map((member, index) => (
                        <li key={index} className="text-center border rounded px-4 mx-3 mb-4 mx-md-0 col-md-6">
                            <img src={member.photo} alt={member.name} className='mb-1' />
                            <h4 style={{ fontWeight: '500' }}>{member.name}</h4>
                            <span className='d-inline-block text-nowrap'>{member.position}</span>
                            <p className='text-start'>{member.description}</p>
                        </li>
                    ))}
                </ul>
            </div>


            <h2 className='text-center'>FAQ</h2>

            <ul className='faq col-12 col-md-10 mx-auto'>
                <Accordion title='How can I place my investment??' />
                <Accordion title='When will the fully executed subscription agreement be sent?' />
                <Accordion title='How long does payment process time take?' />
            </ul>

        </StyledBudboTeam>

    )
}

export default BudboTeam;