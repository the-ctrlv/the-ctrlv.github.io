import arrowSm from '../../assets/images/purple-arrow.svg';
import BudboSelect from './Select';
import { StyledStickyBar } from './styles';
import SideBarSwiper from './Swiper';

function StickyBar() {
    return (
        <StyledStickyBar className='position-absolute h-100'>
            <div className='side-bar-container rounded border'>
                <div className='top-content rounded-top border-bottom'>
                    <ul className='d-flex justify-content-between flex-wrap'>
                        <li>
                            <span className='title'>
                                Total Collected
                            </span>
                            <span className='value'>
                                $4,204,204
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                No. of Investors
                            </span>
                            <span className='value'>
                                5,0210
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Min. Investment
                            </span>
                            <span className='value'>
                                495
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Price per share
                            </span>
                            <span className='value'>
                                $5.50
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Shares Offered
                            </span>
                            <span className='value'>
                                Common
                            </span>
                        </li>
                        <li>
                            <span className='title'>
                                Offering Type
                            </span>
                            <span className='value'>
                                Equity
                            </span>
                        </li>
                    </ul>
                    <h6 className='my-3'>What you gain as a investor</h6>
                    <BudboSelect />
                    <BudboSelect />
                    <BudboSelect />
                    <BudboSelect />
                    <BudboSelect />
                    <a href="#" className='mt-2'>
                        Everything About Investing Tiers
                        <img src={arrowSm} alt="arrow" className='ms-2' />
                    </a>
                </div>
                <SideBarSwiper />
            </div>
            <div className="ghost-container position-absolute">
            </div>
        </StyledStickyBar>
    )
}
export default StickyBar;