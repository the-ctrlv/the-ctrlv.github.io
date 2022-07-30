import arrowSm from '../../assets/images/arrow-sm.svg';
import { StyledMain } from './styles'
function Main() {
    return (
        <StyledMain className='d-flex justify-content-center align-items-center'>
            <div className="container h-100 position-relative">
                <h1 className='fw-bold'>
                    <span className="d-block slogan">Cannabis Meets Blockchain.</span>
                    You Meet a Future-Proof <br /> Investment Opportunity
                </h1>
                <p className='my-5'>
                    Budding Technologies, Inc. puts cannabis on blockchain,
                    merging two booming industries in a revolutionary business model.
                    This is your chance to get in early. Save your front seat to the birth of a new industry.
                </p>
                <button className="btn btn-primary">
                    Invest now
                    <img src={arrowSm} alt='arrow' className='ms-1' />
                </button>
            </div>
        </StyledMain>
    )
}

export default Main