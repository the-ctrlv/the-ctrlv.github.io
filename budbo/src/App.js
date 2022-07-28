import Header from './components/Header';
import BillionDollar from './sections/BillionDollar';
import BlockchainTechnology from './sections/BlockchainTechnology';
import BudboTeam from './sections/BudboTeam';
import BudboUnique from './sections/BudboUnique';
import BudboWork from './sections/BudboWork';
import Buildings from './sections/Buildings';
import Footer from './sections/Footer';
import Legalization from './sections/Legalization';
import Main from './sections/main';
import WhatChanged from './sections/WhatChanged';
import { GlobalStyles, StyledWhiteWrapper } from './shared';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Header />
      <Main />

      <StyledWhiteWrapper>
        <BillionDollar />
        <WhatChanged />
        <BudboWork />
      </StyledWhiteWrapper>


      <Buildings />
      <BlockchainTechnology />


      <StyledWhiteWrapper>
        <BudboUnique />
      </StyledWhiteWrapper>


      <Legalization />


      <StyledWhiteWrapper>
        <div className="container">
          <BudboTeam />
        </div>
      </StyledWhiteWrapper>


      <Footer />

    </div>
  );
}

export default App;
