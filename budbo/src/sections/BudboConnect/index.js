import connectBg from '../../assets/images/connect-bg.png';
import connectBgMob from '../../assets/images/connect-bg-mob.png';
import WhoBudboIsFor from '../../components/WhoBudboIsFor';
import { StyledColoredWrapper, useMobileMode } from '../../shared';
import { StyledBudboConnect } from './styles';
import { mockBudboConnect } from './constants';

function BudboConnect() {
    const isMobileMode = useMobileMode();

    return (
        <StyledBudboConnect>
            <div className="container">
                <div className="width-wrapper col-12 col-xl-10">
                    <h2>Budbo Connect</h2>
                    <h5 className='mt-2 mb-5'>Sell more cannabis products with data-driven decision-making</h5>
                    <span className='budbo-badge fw-bold d-block mb-2'>BUDBO CONNECT</span>
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
                    <ul className='d-none d-xl-flex justify-content-between flex-wrap'>
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
                <StyledColoredWrapper className='connect col-12 col-lg-10'>
                    <img src={isMobileMode ? connectBgMob : connectBg} alt="connect" className='connect-img w-100' />
                    <div className="width-wrapper">
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO CONNECT</span>
                        <h3>
                            We expect the <span>increase in foot traffic, improved analytics,
                                and exceptional customer service</span> to cement strong, longstanding
                            relationships with all of our dispensary partners.
                        </h3>
                        <p className='text-colored mt-4'>
                            These key analytics ultimately provide the final solution for dispensary
                            owners and prospectors, allowing them to know which strains to grow and exactly
                            which products to stock in order to increase sales and grow revenue.
                        </p>
                    </div>
                    <WhoBudboIsFor contentToShow='connect' />
                </StyledColoredWrapper>
            </div>
        </StyledBudboConnect>
    )
}
export default BudboConnect;