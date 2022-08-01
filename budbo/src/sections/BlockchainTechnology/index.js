import { StyledBlockChainTechnology } from './styles'
import { mockBlockchainTechnologies } from './constants';

function BlockchainTechnology() {
    return (
        <StyledBlockChainTechnology>
            <div className="container col-12 col-xl-10">
                <div className="col-9 col-xl-10">
                    <h2 className="mb-5">How Does Blockchain Technology <br /> Fuel the Budbo App?</h2>
                    <ul className='blockchain-list'>
                        {mockBlockchainTechnologies.map((blockchainTechnology, index) => (
                            <li key={index}>
                                <img className='mb-4 mb-md-5 logo' src={blockchainTechnology.logo} alt={index} />
                                {blockchainTechnology.title}
                                <img src={blockchainTechnology.image} alt={index} className="w-100" />
                                {blockchainTechnology.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledBlockChainTechnology>
    )
}

export default BlockchainTechnology