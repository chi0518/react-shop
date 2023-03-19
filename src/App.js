import './App.css';
import Navbar from "./componets/Navbar";
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Event from './pages/Event';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import data from './data';
import { useState } from 'react';
import { createContext } from 'react';

export const context1 = createContext();

function App() {

  const [ shoes ] = useState(data);
  const [contextTest, setContextTest] = useState(['가', '나', '다']);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>}/>
        <Route path="/detail/:id" element={
           <context1.Provider value={{contextTest}}>
              <Detail shoes={shoes}/>
            </context1.Provider> 
            }/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추 서비스</p>}/>
          <Route path="two" element={<p>생일 기념 쿠폰 받기</p>}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
