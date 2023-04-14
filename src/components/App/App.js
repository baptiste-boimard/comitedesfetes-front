import { Routes, Route } from 'react-router-dom';

// ==IMPORT COMPONENTS==
// import Login from '../Login';
import Header from '../Header';
import Menu from '../Menu';
import Home from '../Home';
import Footer from '../Footer';
import Team from '../Team';


function App() {
  return (
    // ==--COMPONENT APP--==
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/team"} element={<Team />} />
      </Routes>
      <Footer />
    </>
  // ==--COMPONENT APP--==
  );
}

export default App;