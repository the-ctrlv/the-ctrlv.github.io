import blockchain from '../../assets/images/blockchain-icon.svg';
import business from '../../assets/images/business-icon.svg';
import image1 from '../../assets/images/cannabis-image1.jpg'
import image3 from '../../assets/images/cannabis-image2.jpg'
import image2 from '../../assets/images/cannabis-image3.jpg'
import flexibility from '../../assets/images/flexibility-icon.svg';
import safety from '../../assets/images/safety-icon.svg';
import wallet from '../../assets/images/wallet-icon.svg';

export const mockFeatures = [
    {
        logo: wallet,
        title: 'Integrated Wallet',
        text: 'Budbo’s integrated wallet also supports a wide range of tokens and cryptocurrencies,' +
            'giving users access to two budding industries in a single app.'
    },
    {
        logo: blockchain,
        title: 'App based on Blockchain',
        text: 'Budbo is the only cannabis app with an integrated wallet and' +
            ' token and the only one to focus on blockchain technology.'
    },
    {
        logo: flexibility,
        title: 'Flexibility',
        text: 'Budbo is the only cannabis platform that rewards users for sharing their data in a web3-style model:' +
            'users can earn cryptocurrency rewards, Budbo tokens, and more for their data'
    },
    {
        logo: safety,
        title: 'Safety',
        text: 'Budbo brings every type of stakeholder in the cannabis industry under the same digital roof.'
    },
    {
        logo: business,
        title: 'Business Intelligence',
        text: 'Budbo is the only platform of its kind that provides unique benefits to every type of user,' +
            'from dispensaries and growers to end- users and shippers.'
    }
]


export const mockCannabisData = [
    {
        title: <h3>New Frontier Data further reports <span className="text-primary">
            263 million cannabis consumers</span> currently make up that worldwide market.</h3>,
        image: image1,
        text: <p>The cannabis market is expected to grow at a CAGR of 26.7% from 2021 to 2028.
            The increased legalization of marijuana for medical and adult-use and the growing adoption of
            these products for the treatment of chronic diseases are the key factors driving the market
            for legal marijuana.</p>,
    },
    {
        title: <h3>North America accounted for the largest revenue share of 79.6% in 2020 owing to the early
            legalization of medical and recreational cannabis in the region and the large customer pool.</h3>,
        image: image2,
        text: <p className='secondary'>Sales of high-THC cannabis through global legal regulated markets totaled
            $23.7 billion in 2020, with the combined legalized medical and adult-use state markets in the United
            States alone accounting for $20.3 billion (86%). Over the next two years, the position of the U.S. as
            a global leader of cannabis  consumer
            markets will continue to strengthen as states that were stymied in efforts for legalization amid
            the COVID-19 pandemic have regained momentum.</p>
    },
    {
        title: <h3>However the industry is still struggling with a patchwork of laws and
            regulations, as well as a lack of standardization to allow for the legal trade of cannabis
            worldwide.</h3>,
        image: image3,
        text: <p className='secondary'>
            Blockchain technology presents a solution to most of these problems. Smart contracts built on
            blockchain transcend borders and unite interested parties throughout the cannabis industry.
            Budbo’s application and blockchain platform can help make the industry safe, responsible, and
            organized.
            <br />
            <br />
            The cannabis industry is in the early stages of transitioning from an illicit to a legal economy. Of
            the $11.8 billion spent on cannabis in 2019 in the California U.S.A. alone, only $3.1 billion was
            spent through legal channels. Legalization of the system will open a floodgate of
            opportunities for new businesses.</p>
    }
]