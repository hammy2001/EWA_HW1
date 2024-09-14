import logo from './logo.svg';
import './styles.css';
import { Fragment, Suspense, useEffect, useState } from 'react';
import { Router, Routes, Route, Switch, useNavigate, useLocation } from 'react-router-dom';
import routes from './routes/routes';
import Footer from './pages/footer';
import Header from './pages/header';
import Homepage from './pages/homepage';
import Sidebar from './pages/sidebar';
import { useSelector } from 'react-redux';
import Login from './pages/login';

function App() {
  const isAuthenticated = useSelector((state)=>state?.userReducer?.isAuthenticated);
  const history = useNavigate();
  const location = useLocation();
  const [loggedin, setLoggedIn] = useState(null);

  useEffect(()=>{
    console.log(location.pathname);
    if(location.pathname === '/'){
      history('/login')
    }
    
  },[location.pathname])


  useEffect(()=>{
    setLoggedIn(isAuthenticated);
  },[isAuthenticated])




  return (
    <>
    {
      !loggedin ? <Login /> :
    
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

      }
    </>

  );
}

export default App;
