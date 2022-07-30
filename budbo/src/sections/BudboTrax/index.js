import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper } from '../../shared';
import { StyledBudboTrax } from './styles';

function BudboTrax() {
    return (
        <StyledBudboTrax>
            <div className="container">
                <div className="width-wrapper col-9">
                    <h2>Budbo Trax</h2>
                    <h5 className='mt-2 mb-5'>Supply Chain & Chain of Custody Simplified</h5>
                    <span className='budbo-badge'>BUDBO TRAX</span>
                    <h3 className='mt-2'>BudboTrax is built to establish order, peace of mind, and real-time
                        visibility: ;
                        in the transport of cannabis products throughout the cannabis ecosystem.</h3>
                    <p className='text-colored mt-4'>
                        BudboTrax is a <span className='text-body'>mobile-powered GPS</span>{' '}
                        logistics solution built to monitor the
                        entire cannabis supply chain - from grower to end-user.
                    </p>
                </div>
                <StyledColoredWrapper className='trax'>
                    <h5 className='mt-5 mb-4'>
                        Budbo Connect is a platform that enables dispensaries to sell more products with a minimal
                    </h5>
                    <WhoBudboIsFor contentToShow='trax' />
                </StyledColoredWrapper>
            </div>
        </StyledBudboTrax>
    )
}
export default BudboTrax;