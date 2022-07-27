import Accordion from './Accordion';
import { mockBudboTeam } from './mockBudboTeam';
import { StyledBudboTeam } from './styles';

function BudboTeam() {

    return (
        <StyledBudboTeam>
            <h2 className='mb-4'>
                What’s Next for You and <br />
                Budbo/Budbo Roadmap
            </h2>
            <ul className='roadmap position-relative'>
                <li>
                    <h4 className='mb-3'>2022</h4>
                    <p>
                        Worldwide customer-facing Budbo app release <br />
                        US and Canada Budbo Connect/dispensary onboarding
                    </p>
                </li>
                <li>
                    <h4 className='mb-3'>2023</h4>
                    <p>
                        Israel, Germany, Luxembourg Budbo Connect/dispensary onboarding <br />
                        Budbo Trax release
                    </p>
                </li>
                <li>
                    <h4 className='mb-3'>2024</h4>
                    <p>On-going worldwide expansion...</p>
                </li>
            </ul>


            <h2 className='text-center'>Meet the <span>Budbo Team</span></h2>
            <ul className='d-flex flex-wrap team justify-content-between'>
                {mockBudboTeam.map((member, index) => (
                    <li key={index} className="text-center border rounded px-4">
                        <img src={member.photo} alt={member.name} className='mb-1' />
                        <h4>{member.name}</h4>
                        <span className='d-inline-block'>{member.position}</span>
                        <p className='text-start'>{member.description}</p>
                    </li>
                ))}
            </ul>


            <h2 className='text-center'>FAQ</h2>

            <ul className='faq col-10 mx-auto'>
                <Accordion title='What is Budbo?' />
                <Accordion title='What is Budbo Roadmap?' />
                <Accordion title='What is Budbo Team?' />
            </ul>

        </StyledBudboTeam>

    )
}

export default BudboTeam;