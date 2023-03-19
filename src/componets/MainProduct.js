const MainProduct = (props) => {

  const products = props.shoes;
  const product = products.map((data, index) => { 
    return(
        <div key={index}>
          <img src={data.image}/>
          <h4>{data.title}</h4>
          <p>{data.price}</p>
          <span>{data.content}</span>
        </div>
    )
  })

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3"> {product} </div>
  )
}

export default MainProduct;