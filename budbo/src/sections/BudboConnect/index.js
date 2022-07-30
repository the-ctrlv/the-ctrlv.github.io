import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper } from '../../shared';
import { StyledBudboConnect } from './styles';
import { mockBudboConnect } from './constants';

function BudboConnect() {
    return (
        <StyledBudboConnect>
            <div className="container">
                <div className="width-wrapper col-9">
                    <h2>Budbo Connect</h2>
                    <h5 className='mt-2 mb-5'>Sell more cannabis products with data-driven decision-making</h5>
                    <span className='budbo-badge'>BUDBO CONNECT</span>
                    <h3>Budbo Connect is a retailer dashboard that provides growers and vendors with business
                        intelligence, empowering them to make proactive, data-driven decisions.</h3>
                    <p className='text-colored mt-5'>
                        Budbo Connect gives dispensaries user-generated data laid out in a simple, elegant interface.
                        Point-of-sale and Inventory management API integrations allow for retailers to quickly and
                        effectively keep menus up-to-date on the Budbo App in real-time.
                        <br />
                        <br />
                        Our goal is to empower dispensaries to sell more products with a minimal investment.
                    </p>
                    <h5 className='mt-5 mb-4'>
                        With Budbo’s industry analytics and actionable insights, cannabis business owners can easily
                    </h5>
                    <ul className='d-flex justify-content-between flex-wrap'>
                        {mockBudboConnect.map((item, index) => (
                            <li key={index} className='border d-flex justify-content-center align-items-center'>
                                <div className='d-flex align-items-center w-100'>
                                    <img src={item.logo} alt="inside1" className='me-3' />
                                    <h5>{item.text}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <StyledColoredWrapper className='connect'>
                    <WhoBudboIsFor contentToShow='connect' />
                </StyledColoredWrapper>
            </div>
        </StyledBudboConnect>
    )
}
export default BudboConnect;