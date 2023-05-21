// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Add } from './Components/Add';
import { Login } from './Components/Login'
import { Index } from './Components/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Index />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='add' element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
