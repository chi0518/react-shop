import MainBanner from '../componets/MainBanner';
import MainProduct from '../componets/MainProduct';
import axios from 'axios';
import { useState } from 'react';
import data from '../data';

const Main = () => {

  const [ shoes, setShoes ] = useState(data);
  const [ count, setCount ] = useState(2);

  return (
    <>
      <MainBanner />
      <MainProduct shoes={shoes}/>
        {count <= 3 &&
        <button onClick={()=> {
          axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
          .then((res) => {
            const newData = [...shoes, ...res.data];
            setShoes(newData);
            setCount(count + 1)
          })
          .catch((error)=>{
            console.log("error!!");
          })
        }} className="bg-sky-900 py-2 px-8 text-white">버튼</button>
        }
    </>
  )
}

export default Main;