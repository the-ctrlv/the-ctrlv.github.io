import table from '../../assets/images/table.jpg';
import uniqueImage from '../../assets/images/unique-img.png';
import violetMap from '../../assets/images/violet-map.svg';
import Notification from '../../components/Notification';
import { StyledBudboUnique } from './styles';
import { mockCannabisData, mockFeatures } from './constants';

function BudboUnique() {
    return (
        <StyledBudboUnique className='position-relative'>
            <div className="container">
                <Notification
                    title='Ready to invest in a future-proof platform? Start Here!'
                    link='/'
                    linkText='Invest Now'
                    transformed
                />
                <div className='width-wrapper col-9'>
                    <h2 className='transformed'>What Makes Budbo Unique</h2>
                    <h3 className='mb-5'>Budbo is an all-in-one turnkey solution for everyone in the cannabis market,
                        from growers and sellers to the final customers and every distributor in between.
                        With Budbo, everyone can benefit from secure transactions, state-of-the-art business management,
                        and an opportunity to discover new cannabis products with a tap on their screen.
                    </h3>
                    <p>
                        Its all-encompassing model makes Budbo a best-in-class global platform for all things cannabis.
                        Powered by blockchain and the increasing number of states where cannabis is legalized,
                        this business model is virtually endlessly scalable,
                        offering <span className="text-body fw-bold"> an unparalleled potential for growth.</span>
                    </p>
                    <img src={uniqueImage} alt="Budbo Unique" className='w-100 unique-img' />
                    <h5>Unique features you’ll be hard-pressed to find anywhere else:</h5>
                    <ul className='unique-features'>
                        {mockFeatures.map((feature, index) => (
                            <li key={index} className="border d-flex align-items-center bg-white">
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <img src={feature.logo} alt={feature.title} className="me-3" />
                                        <h5>{feature.title}</h5>
                                    </div>
                                    <p>{feature.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Budding Technologies offers a complete ecosystem <br /> putting
                        Budbo head-and-shoulders above the <br /> competition</h3>
                </div>

                <img src={table} alt="Budbo Unique" className='w-100 table' />

                <Notification
                    title='Become a pioneer in the brave new cannabis world.'
                    description='Invest in Budbo today!'
                    link='/'
                    linkText='Invest Now'
                />
                <div className='width-wrapper col-9'>
                    <h2 className='margin-top'>The Numbers Are In (and They Suggest You Should Invest in
                        Budbo Now)</h2>
                    <h3 className='mt-4 mb-5'>
                        A quick look at the industry statistics that paint a clear <br />
                        picture: Don’t let this opportunity slip away!
                    </h3>
                    <p className='text-colored'>
                        Its all-encompassing model makes Budbo a best-in-class global platform for all things cannabis.
                        Powered by blockchain and the increasing number of states where cannabis is legalized,
                        this business model is virtually endlessly scalable, offering
                        <span className='text-body fw-bold'> an unparalleled potential for growth.</span>
                    </p>
                </div>
                <div className='violet-map'>
                    <h2>
                        New Frontier Data, released the <br /> Global Cannabis Report:
                        <span className='d-block'>2019 Industry Outlook</span>
                    </h2>
                    <h3 className='mt-5'>
                        Raport estimates the global total addressable cannabis market (regulated and illicit)
                        at $344 billion USD and identifying the top five regional markets to be:
                    </h3>
                    <img src={violetMap} alt="Violet Map" className='w-100' />
                </div>
                <div className='width-wrapper col-9'>
                    <ul className='cannabis-data'>
                        {mockCannabisData.map((data, index) => (
                            <li key={index}>
                                {data.title}
                                <img src={data.image} alt={data.index} className="w-100" />
                                {data.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledBudboUnique>
    )
}

export default BudboUnique;