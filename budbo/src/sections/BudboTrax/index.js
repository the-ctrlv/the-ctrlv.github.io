import traxImg from '../../assets/images/trax-bg.png';
import traxImgMob from '../../assets/images/trax-bg-mob.png';
import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper, StyledInsideUl, useMobileMode } from '../../shared';
import { StyledBudboTrax } from './styles';
import { mockTraxInside } from './constants';

function BudboTrax() {
    const isMobileMode = useMobileMode();

    return (
        <StyledBudboTrax>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <h2>Budbo Trax</h2>
                    <h5 className='mt-2 mb-5'>Supply Chain & Chain of Custody Simplified</h5>
                    <span className='budbo-badge fw-bold'>BUDBO TRAX</span>
                    <h3 className='mt-2'>BudboTrax is built to establish order, peace of mind, and real-time
                        visibility: ;
                        in the transport of cannabis products throughout the cannabis ecosystem.</h3>
                    <p className='text-colored mt-4'>
                        BudboTrax is a <span className='text-body fw-bold'>mobile-powered GPS</span>{' '}
                        logistics solution built to monitor the
                        entire cannabis supply chain - from grower to end-user.
                    </p>
                </div>
                <StyledColoredWrapper className='trax col-12 col-lg-10'>
                    <img src={isMobileMode ? traxImgMob : traxImg} alt="trax" className='trax-img d-block' />
                    <div className="width-wrapper transformed">
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO TRAX</span>
                        <h3>
                            Dispensaries and other vested parties will have full control over and insight into all
                            cannabis movements via the Budbo Connect Dashboard. <span>From there, products will
                                be tracked during transport by GPS</span> via a free driver app that is part
                            of the Budbo Tech Ecosystem.
                        </h3>
                        <p className='text-colored mt-4'>
                            Analytical data reports and insights are also available
                            to growers and the broader cannabis network.
                        </p>
                        <h5 className='what-inside-title'>What{"'"}s inside?</h5>
                        <StyledInsideUl className='trax'>
                            {mockTraxInside.map((item, index) => (
                                <li key={index} className='d-flex align-items-center bg-white border'>
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            <img src={item.logo} alt={item.title} className="me-3" />
                                            <h5>{item.title}</h5>
                                        </div>
                                        <h6 className='text-colored mt-3 col-10'>{item.text}</h6>
                                    </div>
                                </li>
                            ))}
                        </StyledInsideUl>

                        <h5>Business logic:</h5>
                        <p className="text-colored mt-3 mb-5" style={{ fontStyle: 'italic' }}>
                            Building strong relationships with dispensaries, growers, and labs
                            will provide an avenue to cross-sell the “BudboTrax” GPS tracking system.
                        </p>
                    </div>

                    <WhoBudboIsFor contentToShow='trax' />
                </StyledColoredWrapper>
            </div>
        </StyledBudboTrax>
    )
}
export default BudboTrax;