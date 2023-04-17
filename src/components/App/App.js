import { Routes, Route } from 'react-router-dom';

// ==IMPORT COMPONENTS==
// import Login from '../Login';
import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Team from '../Team';
import Contact from '../Contact';
import Events from '../Events';
import Archives from '../Archives';
import Others from '../Others';
import Faq from '../Faq';
import Legals from '../Legals';
import Confidentiality from '../Confidentiality';
import Plan from '../Plan';


function App() {
  return (
    // ==--COMPONENT APP--==
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/team"} element={<Team />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/events"} element={<Events />} />
        <Route path={"/archives"} element={<Archives />} />
        <Route path={"/others"} element={<Others />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/legals"} element={<Legals />} />
        <Route path={"/confidentiality"} element={<Confidentiality />} />
        <Route path={"/plan"} element={<Plan />} />

      </Routes>
      <Footer />
    </>
  // ==--COMPONENT APP--==
  );
}

export default App;