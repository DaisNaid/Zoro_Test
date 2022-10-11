import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import HomeScreen from './screens/HomeScreen';

function App() {
  //Toggles menu
  /*const toggle_menu = () => {
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
  };*/

  //Built to run as a single page app
  return (
    <div className="App">
      <HashRouter>
        <div>
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <h2>zoro</h2>
          </header>
          <main>
            <Container className="site-container">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
          <footer></footer>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
