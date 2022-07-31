import budbo from '../../assets/images/budbo-bg.png'
import inside1 from '../../assets/images/inside1.svg'
import inside2 from '../../assets/images/inside2.svg'
import inside3 from '../../assets/images/inside3.svg'
import inside4 from '../../assets/images/inside4.svg'
import uma from '../../assets/images/uma.png'
import WhoBudboIsFor from '../../components/WhoBudboIsFor/index';
import { StyledColoredWrapper, StyledInsideUl } from '../../shared';
import { StyledBudboApp } from './styles'

function BudboApp() {
    return (
        <StyledBudboApp>
            <div className="container">
                <div className="width-wrapper col-9">
                    <img src={budbo} alt="budbo" className='budbo-img' />
                    <h2 className='budbo-title'>Budbo App</h2>
                    <h5>The right cannabis products - a screen tap away</h5>
                    <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                    <h3>The app allows consumers to easily find their preferred
                        cannabis strain in a familiar and gamified manner through
                        a modern and user-friendly interface.
                    </h3>
                    <h5 className='what-inside-title'>What{"'"}s inside?</h5>
                    <StyledInsideUl>
                        <li className='border d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center w-100'>
                                <img src={inside1} alt="inside1" className='me-3' />
                                <h5>AI Driven user experience </h5>
                            </div>

                        </li>
                        <li className='border d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-start w-100'>
                                <img src={inside2} alt="inside1" className='me-3 mt-1' />
                                <div className='flex-grow-1'>
                                    <h5>Wide range of tokens and cryptocurrencies</h5>
                                    <h6 className='text-colored mt-2'>to incentivize, engage, <br />
                                        and reward users</h6>
                                </div>
                            </div>

                        </li>
                        <li className='border d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center w-100'>
                                <img src={inside3} alt="inside3" className='me-3' />
                                <h5>Scalability powered by
                                    blockchain <br /> technology</h5>
                            </div>

                        </li>
                        <li className='border d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center w-100'>
                                <img src={inside4} alt="inside4" className='me-3' />
                                <h5>Already approved on both <br />
                                    Google Play and App Store</h5>
                            </div>
                        </li>
                    </StyledInsideUl>
                </div>
                <StyledColoredWrapper>
                    <div className='width-wrapper col-10 mx-auto'>
                        <span className='budbo-badge fw-bold d-block mb-2'>BUDBO APP</span>
                        <h3>
                            Budbo’s unique “Tinder-like model” has proven to be highly effective
                            in driving alignment between our business and operating models.
                        </h3>
                        <p className='text-colored text'>
                            The combination of a best-in-class mobile app and business intelligence
                            tool empowers users to connect and interact in ways that have never been possible before.
                            <br />
                            <br />
                            By adopting the “swiping” component made popular by applications like Tinder,
                            Budbo facilitates a quick and easy product discovery process. It helps users
                            find exactly what they need in a simplified and fast manner.
                            <br />
                            <br />
                            Our patent-pending product matching feature is on the cutting edge of scientific
                            research.  The AI driven algorithm is improving everyday with the help of one of
                            Budbo’s key advisors, Dr. Uma Dhanablan.
                        </p>
                        <img src={uma} alt="uma" className='uma-img d-block' />
                        <div className='col-11 mx-auto'>
                            <h4 className='mb-2'>Dr. Uma Dhanabalan</h4>
                            <h5 style={{ fontWeight: 500 }}>Key Advisor to Budding Technologies, Inc.</h5>
                            <p className='text-colored with-indent mt-5 mb-4 ms-0'>
                                Dr Uma’s Bio - Dr. Dhanabalan is a highly respected and educated physician
                                and known to most
                                as Dr Uma. She completed her Bachelor of Arts degree with High Honors from Rutgers
                                University
                                and her Medical Degree from the University of Medicine & Dentistry in Newark,
                                New Jersey.
                            </p>

                            <p className='text-colored with-indent mb-4 ms-0'>
                                She completed her Family Practice Residency at the Medical University of South
                                Carolina, in
                                Charleston, South Carolina. She has her Master’s in Public Health and completed her
                                Occupational
                                & Environmental Medicine Residency and Fellowship in Heavy Metals at the Harvard
                                School of
                                Public Health in Boston, Massachusetts. She is a Fellow of the American Academy of
                                Family
                                Physicians.
                            </p>
                            <p className='text-colored with-indent mb-4 ms-0'>
                                She is a Diplomat in Cannabinoid Medicine Certified by the American Academy of
                                Cannabinoid
                                Medicine, and a Medical Review Officer Certified by  Medical Review Officer
                                Certification
                                Council.
                            </p>
                        </div>
                        <p className='text-colored my-5'>
                            The Token Swap streamlines the purchase even further, allowing for a gamified,
                            seamless experience.
                        </p>
                    </div>

                    <WhoBudboIsFor contentToShow='app' />
                </StyledColoredWrapper>
            </div>
        </StyledBudboApp >
    )
}

export default BudboApp