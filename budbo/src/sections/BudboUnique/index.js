import table from '../../assets/images/table.jpg';
import uniqueImage from '../../assets/images/unique-img.png';
import uniqueImageMob from '../../assets/images/unique-img-mob.png';
import violetMap from '../../assets/images/violet-map.svg';
import violetMapMob from '../../assets/images/violet-map-mob.svg';
import Notification from '../../components/Notification';
import { useMobileMode } from '../../shared';
import { StyledBudboUnique } from './styles';
import { mockCannabisData, mockFeatures } from './constants';

function BudboUnique() {
    const isMobileMode = useMobileMode()

    return (
        <StyledBudboUnique className='position-relative'>
            <div className="container">
                <div className='width-wrapper col-12 col-xl-10'>
                    <Notification
                        title='Ready to invest in a future-proof platform? Start Here!'
                        link='/'
                        linkText='Invest Now'
                        transformed
                        w80
                    />
                    <h2 className='transformed'>What Makes Budbo Unique</h2>
                    <h3 className='mb-5'>Budbo is an all-in-one turnkey solution for everyone in the cannabis market,
                        from growers and sellers to the final customers and every distributor in between.
                        With Budbo, everyone can benefit from secure transactions, state-of-the-art business management,
                        and an opportunity to discover new cannabis products with a tap on their screen.
                    </h3>
                    <p className='text-colored'>
                        Its all-encompassing model makes Budbo a best-in-class global platform for all things cannabis.
                        Powered by blockchain and the increasing number of states where cannabis is legalized,
                        this business model is virtually endlessly scalable,
                        offering <span className="text-body fw-bold"> an unparalleled potential for growth.</span>
                    </p>
                    {isMobileMode ?
                        <img src={uniqueImageMob} alt="Budbo Unique" className='w-100 unique-img' />
                        :
                        <img src={uniqueImage} alt="Budbo Unique" className='w-100 unique-img' />
                    }
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
                <div className="width-wrapper col-12 col-xl-10">
                    <img src={table} alt="Budbo Unique" className='table' />
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
                    <Notification
                        title='Become a pioneer in the brave new cannabis world.'
                        description='Invest in Budbo today!'
                        link='/'
                        linkText='Invest Now'
                    />
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
                    <div className='violet-map'>
                        <h2>
                            New Frontier Data, released the <br className='d-none d-lg-block' /> Global Cannabis Report:
                            <span className='d-block'>2019 Industry Outlook</span>
                        </h2>
                        <h3 className='mt-5'>
                            Raport estimates the global total addressable cannabis market (regulated and illicit)
                            at $344 billion USD and identifying the top five regional markets to be:
                        </h3>
                        <img src={isMobileMode ? violetMapMob : violetMap}
                            alt="Violet Map" className='w-100' />
                    </div>
                </div>
                <div className='width-wrapper col-12 col-xl-10'>
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
        </StyledBudboUnique >
    )
}

export default BudboUnique;