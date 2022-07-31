import Header from './components/Header';
import BillionDollar from './sections/BillionDollar';
import BlockchainTechnology from './sections/BlockchainTechnology';
import BudboApp from './sections/BudboApp';
import BudboConnect from './sections/BudboConnect';
import BudboTeam from './sections/BudboTeam';
import BudboTrax from './sections/BudboTrax';
import BudboUnique from './sections/BudboUnique';
import BudboWork from './sections/BudboWork';
import Buildings from './sections/Buildings';
import Footer from './sections/Footer';
import Legalization from './sections/Legalization';
import Main from './sections/main';
import Reasons from './sections/Reasons';
import WhatChanged from './sections/WhatChanged';
import { GlobalStyles, StyledWhiteWrapper } from './shared';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Header />
      <Main />


      <StyledWhiteWrapper>
        <div className='container video-container'>
          <iframe width="85%" height="500px" src="https://www.youtube.com/embed/gtV-Z-qiZW8"
            title="YouTube video player" frameBorder="{0}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
        <Reasons />
        <BillionDollar />
        <WhatChanged />
        <BudboWork />
        <div className='sticky-container position-absolute col-3'>
          <div className='position-sticky sticky-top'>
            <h1>CHECK</h1>
          </div>
        </div>
      </StyledWhiteWrapper>


      <Buildings />

      <StyledWhiteWrapper>
        <BudboApp />
        <BudboConnect />
        <BudboTrax />
      </StyledWhiteWrapper>

      <BlockchainTechnology />


      <StyledWhiteWrapper>
        <BudboUnique />
      </StyledWhiteWrapper>


      <Legalization />


      <StyledWhiteWrapper className='exception-mobile'>
        <div className="container">
          <BudboTeam />
        </div>
      </StyledWhiteWrapper>


      <Footer />

    </div>
  );
}

export default App;
