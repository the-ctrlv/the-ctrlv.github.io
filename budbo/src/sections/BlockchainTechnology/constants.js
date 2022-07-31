/* eslint-disable react/no-unescaped-entities */
import polygonLogo from '../../assets/images/polygon-logo.svg';
import technologyImage from '../../assets/images/technology-img.jpg';
import technologyImage2 from '../../assets/images/technology-img2.jpg';
import uniswapLogo from '../../assets/images/uniswap-logo.svg';

export const mockBlockchainTechnologies = [
    {
        logo: polygonLogo,
        title: <h6><span className="text-primary">A hallmark of the Budbo Ecosystem is its
            token rewards system.</span>As information is passed
            from dispensaries, labs, manufacturers, and growers on to patients and consumers, data is also
            relayed back to these key cannabis industry producers from the mobile app user.</h6>,
        image: technologyImage,
        description:
            <p className='text-colored'>
                For instance, strain match data gives <span className='text-body fw-bold'>
                    invaluable insight into the purchasing preferences
                    of local users</span>,
                allowing these key industry producers to <span className='text-body fw-bold'>
                    make better business decisions</span> regarding
                which strains of cannabis
                to grow, create, and stock on their shelves.
                <br />
                <br />
                In return for their actions inside the app which provide this data,
                <span className='text-body fw-bold'>{' '}
                    the user is “rewarded” with ERC-20, Budbo Tokens (BUBO)</span>. Where applicable,
                these tokens <span className='text-body fw-bold'>
                    can be redeemed for products and services within the Budbo ecosystem.</span>
                <br />
                <br />
                To keep costs in check and transactions at near-instant speeds with a throughput of up to 10,000
                ransactions per second,
                the token rewards system utilizes the Polygon.network scaling solution. Our partners at Polygon.network
                (SYMBOL: MATIC) are the very best in their assistance with the development of these protocols.
            </p>
    },
    {
        logo: uniswapLogo,
        title: <h6>Another key component of the Budbo ecosystem is the use of swap and pool protocols
            when dealing with transactions inside the app.</h6>,
        image: technologyImage2,
        description:
            <p className='text-colored'>
                For some, the technical barrier to entry into tokens and cryptocurrency is still high, which
                is why both app users and cannabis industry producers can be off-put by concepts such as
                blockchain and tokens.
                <br />
                <br />
                Budbo solves this problem and <span className='text-body fw-bold'>{' '}
                    allows end-users and cannabis businesses to enjoy the benefits of
                    tokens and cryptocurrency without having to write a single line of code or even be
                    technically inclined.</span>
                <br />
                <br />
                Swap protocols and liquidity pools provide users and dispensaries the ability to transact with
                tokens while still only accepting or dealing with their native currency. This allows app users and
                dispensaries to "learn" and adapt to a decentralized tokenized platform at their own pace, all the while
                rewarding the community for their participation in the pools.
            </p>
    }
]