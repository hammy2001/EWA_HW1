import logo from './logo.svg';
import './styles.css';
import { Fragment, Suspense } from 'react';
import { Router, Routes, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import Footer from './pages/footer';
import Header from './pages/header';
import Homepage from './pages/homepage';
import Sidebar from './pages/sidebar';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className='row' >
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9'>
        <Routes>

          {routes.map(({ component: Component, path, exact, style }) => (
            <Route path={`/${path}`} key={path} exact={exact} element={<Component />} />

          ))}
        </Routes>
      </div>
      </div>
     


      <Footer />
    </Suspense>



  );
}

export default App;
