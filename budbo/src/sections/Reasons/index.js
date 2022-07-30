import mentor from '../../assets/images/mentor.png'
import reason5 from '../../assets/images/reason5-bg.png';
import reason7Map from '../../assets/images/reason7-map.png'
import mentor2 from '../../assets/images/stephen-CFO.png'
import table from '../../assets/images/table.jpg';
import PhoneSwiper from '../../components/PhoneSwiper';
import { StyledReasons } from './styles'
import { mockMentorAwards, mockStephenCFO, reason1Content } from './constants'

import 'swiper/css';

function Reasons() {

    return (
        <StyledReasons>
            <div className='container'>
                <div className='width-container col-9'>
                    <h2 className='reasons-title'>Here are <span>7 reasons
                    </span>
                        {' '}why Budding Technologies, Inc.
                        will be a <span className='d-block' style={{ color: 'var(--primary)' }}>
                            breakout star in your investment portfolio</span>
                    </h2>


                    <div className="reasons reason1 border-bottom">
                        <h6># REASON 1</h6>
                        <h3 className="mt-2 mb-5">Own not just a Cannabis startup; Budding Technologies Inc.
                            has built a whole ecosystem that benefits
                            <span className='text-primary d-block'> dispensaries, growers,
                                merchants, couriers, and buyers.</span>
                        </h3>
                        <h5 className='mb-4'>
                            Budding Technologies Inc. and its’ “Budbo” suite of products are far more than
                            an app. Budbo is
                            a complete ecosystem that is poised for endless scalability.</h5>
                        <p className='text-colored'>
                            As the global cannabis industry transitions from an illicit to a legal economy,
                            this is your opportunity to tap into the unique opportunity of legalized cannabis
                            sales on a massive scale.
                            <br />
                            <br />
                            Backed by the blockchain, Budbo bridges the gaps between patient,
                            recreational user, dispensary, manufacturer, and grower.
                            <br />
                            <br />
                            <span className='text-body'>
                                There are three parts to the Budbo Ecosystem:
                            </span>
                        </p>
                        <ul className='ecosystem w-100'>
                            {reason1Content.map((item, index) => (
                                <li key={index} className="d-flex align-items-center border-bottom">
                                    <img src={item.logo} alt="logo" className='me-5' />
                                    <p className='text-colored'>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="reasons reason2 border-bottom">
                        <h6># REASON 2</h6>
                        <h3 className="mt-2 mb-5">
                            <span className="text-primary">Budbo’s unique marketplace</span>{' '}
                            proven to be highly effective in user engagement and retention.
                        </h3>
                        <p className='text-colored'>
                            Budbo’s unique “Tinder-like model” has proven to be highly effective in
                            driving user engagement, and alignment between our business and operating models.
                            <br />
                            <br />
                            By adopting the “swiping” component made popular by applications like Tinder, Budbo invites
                            users to puff or pass on a wide variety of cannabis products and facilitates a quick
                            and easy product discovery process.
                            <br />
                            <br />
                            It helps users find exactly what they need in a simple gamified manner.
                        </p>
                        <PhoneSwiper />
                    </div>

                    <div className="reasons reason3 border-bottom">
                        <h6># REASON 3</h6>
                        <h3 className='mt-2 mb-5'>
                            Budbo is the first holistic ecosystem that touches every stakeholder of the {' '}
                            <span className="text-primary">cannabis industry.</span></h3>
                        <img src={table} alt="Budbo Unique" className='w-100' />
                    </div>

                    <div className="reasons reason4 border-bottom">
                        <h6># REASON 4</h6>
                        <h3 className='mt-2 mb-5'>
                            Patent-Pending <span className="text-primary">product-matching</span>{' '}
                            based on user input,
                            interactions, and cutting edge research.
                        </h3>
                        <p className='text-colored'>
                            Our patent-pending product matching feature is on the cutting edge of scientific research.
                            <br />
                            <br />
                            The AI-driven algorithm is improving every day with the help of one of Budding
                            Technologies Inc.’s key advisors; Dr. Uma Dhanablan.
                        </p>

                        <PhoneSwiper reason4 />

                        <div className='mentor d-flex align-items-end'>
                            <img src={mentor} alt="mentor" className='col-3 me-4' />
                            <ul>
                                {mockMentorAwards.map((award, index) => (
                                    <li key={index} className='mb-2'>
                                        <p>{award}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p>
                            <span className='text-primary'>Our AI-driven algorithm tracks and analyzes
                                every action a user</span>
                            takes on the platform – to bring the absolute best-in-class
                            cannabis experience to our users.
                            <br />
                            <br />
                            With this system in place, Budbo can deliver a better user experience and encourage loyalty.
                            This gives Budbo another advantage in delivering a much better user experience,
                            while driving repeat revenue growth.
                        </p>

                    </div>

                    <div className="reasons reason5 border-bottom">
                        <h6># REASON 5</h6>
                        <h3 className='mt-2 mb-5'>
                            Your opportunity to <span className="text-primary">own shares</span> in a company
                            disrupting not one, but <span className="text-primary">TWO multi-billion-dollar
                                industries. </span>
                        </h3>

                        <p className='with-indent mb-5 text-colored'>The regulated cannabis market in the US alone will
                            grow at a 25.5% CAGR between 2022 and 2030.</p>


                        <p className='with-indent mb-5 text-colored'>
                            The global blockchain market will grow from $7.18 billion
                            in 2022 to $163.83 billion by 2029, at a CAGR of 56.3%.</p>

                        <p className='text-colored'>
                            By combining these two markets, Budbo empowers the cannabis industry to grow at
                            an even faster pace and removes the inefficiencies and challenges cannabis
                            businesses face today, even in regulated states.
                        </p>
                        <div className="img-wrapper position-relative">
                            <img src={reason5} alt="reason5" className='w-100' />
                        </div>

                    </div>

                    <div className="reasons reason6 border-bottom">
                        <h6># REASON 6</h6>
                        <h3 className='mt-2 mb-5'>
                            <span className="text-primary">Invest Now.</span>{' '}
                            Here’s our 3-year exit strategy
                        </h3>
                        <h4>
                            Go to market in approximately two years with an ARR of a minimum of $10 million and a
                            valuation of approximately $100-$150 million, either via private or public offering.
                        </h4>
                        <h4 className='my-5'>
                            Explore the possibility of being acquired if the opportunity presents itself.
                        </h4>
                        <p className='text-colored'>
                            Budding Technologies’ <span className='text-body'>CFO Stephen Rosen brings</span>{' '}
                            extensive expertise from both the public and
                            private sectors in these regards. <span className='text-body'>
                                Stephen has served as the CFO for private and public
                                companies for over 30 years,</span> ranging from Wireless Broadcast and Telecom,
                            to Cloud AI
                            and ML, SaaS, Apparel manufacturing and Foodtech on an international basis.
                        </p>

                        <div className='mentor d-flex align-items-start justify-content-between 
                        position-relative'>
                            <img src={mentor2} alt="mentor" className='col-3' />
                            <ul className='col-7'>
                                {mockStephenCFO.map((text, index) => (
                                    <li key={index} className='mb-2'>
                                        {text.text}
                                    </li>
                                ))}
                            </ul>
                            <p className='position-absolute text-colored'>
                                Stephen Rosen <br />
                                CFO of Budding Technologies, Inc.
                            </p>
                        </div>
                    </div>

                    <div className="reasons reason7">
                        <h6># REASON 7</h6>
                        <h3 className='mt-2 mb-5'>
                            <span className="text-primary">I Can Help Millions of People</span>{' '}
                            Gain Access to the Cannabis Products They Need
                        </h3>
                        <h4 className='mb-4'>
                            Cannabis is gaining more traction in the US, but also in other countries on almost
                            every continent.
                        </h4>
                        <p className='text-colored'>
                            As the medical world unveils the benefits of cannabis for a variety of illnesses, more
                            and more patients all over the world can reap its benefits.
                        </p>
                        <div className='map-wrapper mt-4 position-relative'>
                            <img src={reason7Map} alt="reason7Map" className='w-100' />
                            <p className='position-absolute text-colored'>
                                By investing in Budbo, you help our users  gain faster and easier access to the
                                cannabis products they need. Now is the ideal time to take advantage of the growth
                                potential of the cannabis industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledReasons>
    )
}
export default Reasons 