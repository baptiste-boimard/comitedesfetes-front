import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import Admin from '../Admin';
import AdminLogged from '../Admin/Adminlogged';


function App() {

  // ==CALL STORE==
  const { adminLogged } = useSelector((state) => state.loginReducer);



  return (

    // ==--COMPONENT APP--==
    <>
      <Header />
      <Menu />
      {(adminLogged && <AdminLogged />)}
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
        <Route path={"/admin"} element={<Admin />} />
      </Routes>
      <Footer />
    </>
  // ==--COMPONENT APP--==
  );
}

export default App;