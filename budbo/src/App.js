import Header from './components/Header';
import BudboTeam from './sections/BudboTeam';
import Footer from './sections/Footer';
import Main from './sections/main';
import { GlobalStyles, StyledWhiteWrapper } from './shared';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Header />

      <Main />

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
