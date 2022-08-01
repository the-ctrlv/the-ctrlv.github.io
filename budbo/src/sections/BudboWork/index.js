import workImage from '../../assets/images/work-bg.png';
import { StyledBudboWork } from './styles';
import { mockBenefits, mockCompanyLogos } from './constants';

function BudboWork() {
    return (
        <StyledBudboWork>
            <div className="container">
                <div className='width-wrapper col-12 col-xl-10'>

                    <h2 className="mb-5 text-center">
                        How Does <span className="text-primary">Budbo</span> Work?</h2>
                    <img src={workImage} alt="How does budbo work?" className='d-none d-md-block work-image w-100' />
                    <div className="mob-img d-md-none" />
                    <h3>Budbo is a complete technology solution that benefits cannabis dispensaries, growers,
                        couriers, and users.</h3>
                    <p className='mt-4 mb-5'>
                        Its functionality goes beyond seed-to-sale tracking by normalizing the
                        cash-intensive marketplace,
                        powering revenue for merchants and enabling consumers to enjoy a speedy, convenient, safe,
                        and private way to pay.
                        <br />
                        <br />
                        Budbo has a unique working model that benefits all parties in the legal cannabis trade.
                        The main features of Budbo’s business model are:
                    </p>
                    <ul className='benefits d-flex flex-wrap justify-content-between'>
                        {mockBenefits.map((benefit, index) => (
                            <li key={index} className="border d-flex align-items-center">
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <img src={benefit.logo} alt={index} className="me-3" />
                                        <h5>{benefit.title}</h5>
                                    </div>
                                    <p className='mt-4'>{benefit.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2 className='d-none d-md-block'>
                        <span className="text-primary">Budbo</span> has been featured in:</h2>
                    <div className='d-md-flex flex-wrap justify-content-center company-logos'>
                        {mockCompanyLogos.map((company, index) => (
                            <img key={index} src={company} alt={index} className='d-block mb-5 mx-auto mx-md-2' />
                        ))}
                    </div>
                </div>
            </div>
        </StyledBudboWork>
    )
}

export default BudboWork;