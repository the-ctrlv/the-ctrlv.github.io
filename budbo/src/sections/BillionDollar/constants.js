import ideaImage from '../../assets/images/billion-idea.png';
import solutionImage from '../../assets/images/billion-solution.png';

export const mockBillionIdea = {
    title: 'A Multi-Billion Dollar Business Idea in 30 Seconds',
    image: ideaImage,
    description: <h3>The global cannabis market (regulated and illicit) is currently estimated
        at <span className="text-primary">$344 billion USD. </span> The regulated market in
        the US alone <span className="text-primary">will grow at a 25.5% CAGR</span>{' '}
        between 2022 and 2030. The global blockchain market will grow from $7.18 billion
        in 2022 to $163.83 billion by 2029, at a <span className="text-primary">
            CAGR of 56.3%.</span></h3>,
    text: <p className='text'>
        By combining these two markets, Budbo empowers the cannabis industry to grow at an even faster
        pace and removes the inefficiencies and challenges cannabis businesses face even in regulated states.
        <br />
        <br />
        Budding Technologies, Inc offers <span>unified solution for cannabis businesses and users
            to transact safely, securely, and in compliance with federal and state regulations.</span></p>
}

export const mockBillionSolution = {
    title: <h2>A 300-Billion Dollar Problem Meets a
        <span className="text-primary"> 300-Billion Dollar Solution</span>
    </h2>,
    image: solutionImage,
    description: <h3> Any new industry comes with new challenges (especially when <span
        style={{ color: 'var(--primary)' }}> it’s worth
        $300+ billion!</span>) - but also with brand-new opportunities.</h3>,
    text: <h4 className='my-4'>This fast-growing sector of the economy presents challenges that no one has
        dealt with before, partly because even in states that have legalized the sale of cannabis,
        cannabis-related businesses still face many business restrictions and inefficiencies.
    </h4>,
    text2: <p className='text-colored'>
        This is particularly true when it comes to <span className='text-body fw-bold'> banking, legal protection,
            consumer outreach, and supply chain management. </span>The government has historically
        restricted and penalized cannabis users and businesses -- until recently.</p>
}