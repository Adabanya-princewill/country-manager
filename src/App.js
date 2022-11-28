import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import CountryDetails from './components/details/CountryDetails'
import HomePage from './components/home/Homepage'
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/> 
          <Route path="/country/:name" element={<CountryDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router> 
      <Outlet/>   
    </>



  );
}

export default App;
