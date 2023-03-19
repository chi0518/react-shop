import { useDispatch, useSelector } from "react-redux";
import { countUpdate, increase } from './../store/productSlice';


const Cart = () => {

  const list = useSelector((state)=>state.products);
  const dispatch = useDispatch();

  const post = list.map((data, index) =>
     <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.count}</td>
            <td><button onClick={()=>dispatch(countUpdate(data.id))}>+</button></td>
      </tr>
  )

  return (
    <>
    <h4>테스트 숫자 {list[0].count}</h4>
    <button onClick={()=>dispatch(increase(100))}>숫자 더하기</button>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>{post}</tbody>
    </table>
    </>
  )
};

export default Cart;