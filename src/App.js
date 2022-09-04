import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import search_icon from './css-test-2022/icons/search-outline.svg';
import menu from './css-test-2022/icons/menu-outline.svg';
import close from './css-test-2022/icons/close.svg';
import HomeScreen from './screens/HomeScreen';
import Facebook from './css-test-2022/icons/facebook-outline.svg';
import Twitter from './css-test-2022/icons/twitter-outline.svg';

function App() {
  //Toggles menu
  const toggle_menu = () => {
    const the_menu = document.querySelector('.menu');
    the_menu.classList.toggle('is-open');
  };
  //Closes menu after a selection is made
  const revert = () => {
    const the_menu = document.querySelector('.menu');
    the_menu.classList.toggle('is-open');
  };

  const toggle_search = () => {
    const the_search = document.querySelector('.search-space');
    the_search.classList.toggle('open');
  };

  const revert_search = () => {
    const close_search = document.querySelector('.search-space');
    close_search.classList.toggle('open');
  };

  //Built to run as a single page app
  return (
    <div className="App">
      <HashRouter>
        <div>
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <h2>ART GALLERY</h2>
            <img onClick={toggle_search} src={search_icon} alt="Search" />
            <div className="search-space">
              <img
                className="search-close"
                onClick={revert_search}
                src={close}
                alt="menu"
              />
              <input type="text" name="search" placeholder="Search.." />
            </div>
            <div className="hamburger" onClick={toggle_menu}>
              <img src={menu} alt="menu" />
            </div>
            <div className="menu">
              <ul className="menu-list" style={{ listStyle: 'none' }}>
                <div className="hamburger close" onClick={toggle_menu}>
                  <img src={close} alt="menu" />
                </div>
                <li onClick={revert}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={revert}>
                  <NavLink to="/art">Art & Artists</NavLink>
                </li>
                <li onClick={revert}>
                  <NavLink to="/exhibitions">Exhibitions</NavLink>
                </li>
                <li onClick={revert}>
                  <NavLink to="/news">News</NavLink>
                </li>
                <li onClick={revert}>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={revert}>
                  <NavLink to="/p-area">Private area</NavLink>
                </li>
              </ul>
            </div>
          </header>
          <main>
            <Container className="site-container">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="art" />
                <Route path="exhibitions" />
                <Route path="news" />
                <Route path="about" />
                <Route path="p-area" />
              </Routes>
            </Container>
          </main>
          <footer>
            <div className="footer-head">
              <ul className="font-face-bold title footer-list">
                <li>
                  <NavLink to="/newsletter">Newsletter</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/p-room">Press room</NavLink>
                </li>
              </ul>
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
            </div>
            <div className="address">
              <span>ART GALLERY</span>
              <span>38-40 Southwark Street</span>
              <span>London SE1 1UN</span>
              <a href="tel: +442074905337">
                <span>Telephone +44 20 74905337</span>
              </a>
            </div>
            <div>&copy; 2022 EC1 GALLERY</div>
          </footer>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
