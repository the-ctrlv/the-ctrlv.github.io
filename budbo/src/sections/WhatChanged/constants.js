import logo1 from '../../assets/images/offer-icon1.svg';
import logo2 from '../../assets/images/offer-icon2.svg';

export const mockTextContent = {
    title: <h2>What Changed - and Why <br /> Should it Matter to You?</h2>,
    subtitle: 'We are now seeing a strong and effective push for the federal government to establish,' +
        ' regulate, and encourage an open and fair market for the use and sale of cannabis and' +
        ' cannabis- related products.',
    subtitle2: 'This is where Budbo comes into play, providing the solution that the government,' +
        'the cannabis businesses, and end- users are all looking for.',
    text:
        <p className='text'>
            From a technology perspective, the rapidly evolving cannabis industry presents a
            unique opportunity: <span>legalized sales of cannabis on a massive scale.</span>
            <br />
            <br />
            All the pieces have fallen into place: the cannabis industry can finally benefit from government backing
            and the right technology to thrive. <span>If you’re looking for an investment that will keep
                on giving</span>, you have
            come to the right place: as one of the early investors in Budbo, you get a front-row seat to watch history
            in the making. <span>And get an excellent ROI at the same time!</span>
        </p>
}

export const mockOffers = [
    {
        logo: logo1,
        text: <p> Budbo offers <span>safe, secure, and compliant transactions for cannabis businesses and
            users.</span> The cloud-based platform brings together all relevant parties in the cannabis
            <span>industry to increase standardization, transparency, and efficiency across channels.</span></p>
    },
    {
        logo: logo2,
        text: <p>By integrating seed-to-sale software and financial technology for the cannabis industry with
            a point of sale (PoS) solution for marijuana dispensaries and real-time GPS tracking for product deliveries,
            <span>we provide visibility into the entire life of the cannabis seed-to-sale process.</span></p>
    }
]