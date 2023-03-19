/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { context1 } from "../App";

const YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg === 'blue' ? 'white' : 'black' };
  padding : 10px;
`
const NewBtn = styled(YellowBtn)`
  background:red;
`
const Detail = (props) => {

const {contextTest} = useContext(context1);
const { id } = useParams();
const num = props.shoes.find((n) => n.id === Number(id));
const [isPopup, setIsPopup] = useState(true);
const [isNum, setIsNum] = useState('');
const [tab, setTab] = useState(0);

const tabMenu = ["탭1", "탭2", "텝3"];
const tabList = tabMenu.map((tab, index) => <li className="px-5 flex-1" key={index} onClick={()=>{ setTab(index) }}>{tab}</li>)

useEffect(()=> {
  const timeOut = setTimeout(()=> {setIsPopup(false)}, 2000);
  console.log('나중에');
 
  return() => {
    console.log('사라져');
    clearTimeout(timeOut);
  }
},[]);

useEffect(()=> {
  if (isNaN(isNum) === true) alert("돈두댓 숫자만");
},[isNum]);

const [popEvent, setEvent] = useState('');

useEffect(() => {
  
  const event = setTimeout(() => {setEvent('end')}, 100);

  return () => {
    clearTimeout(event);
    setEvent('');
  }
},[])

  return (
      <>
      <YellowBtn bg="blue"> 버튼 </YellowBtn>
                  <NewBtn>복사 버튼</NewBtn>
        <input type="text" className="block mx-auto	my-4 border-2 border-black" onChange={(e) => setIsNum(e.target.value)}/>
        <div className={`start ${popEvent}`}>
          { isPopup === true ? 
            <div className="bg-yellow-200">2초 이내 구매시 할인</div> 
            : null
          } 
          { num ?
                <div>
                  <div>
                    <img src={num.image} className="w-2/4 m-auto" />
                  </div>
                  <div>
                    
                    <h4 className="text-3xl mb-1">{num.title}</h4>
                    <p className="text-base mb-1">{num.content}</p>
                    <p className="text-xs mb-1">{num.price}</p>
                    <button className="text-base mt-2 bg-sky-900 py-2 px-8 text-white rounded hover:bg-white hover:text-blue-600 hover:border duration-300">주문하기</button> 
                  </div>
                </div>
                :
              <NotFound />
            }
            <ul className="flex flex-nowrap justify-between"> 
              {tabList}
            </ul>
            {contextTest[2]}
            <TabContent tab={tab} shoes={props.shoes}/>
          </div>
      </>
  )
}

const TabContent = (props) => {
  const [contextPop, setContextPop] = useState('');

  useEffect(()=>{
    const textEvent = setTimeout(()=>{setContextPop('end')},100);
    
    return () => {
      clearTimeout(textEvent);
      setContextPop('')
    }
  }, [props])

  return (
  <div className={`start ${contextPop}`}>
    { [ <div>{props.shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div> ][props.tab] }
  </div>
  )
}

export default Detail;