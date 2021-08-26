import React,{useEffect,useState} from "react";
import Product from "../Product/Product";
import './Card.css'
// import Corousal from "./Corousal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';







function Card() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://eps-gigya.herokuapp.com/rewardProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

   
  return (
      <section className="container">
         <div> 
         <h4 className="filter">More Filter <FontAwesomeIcon icon={faPlusCircle} size="2px" color="red"/></h4>
         </div>
         <div class="dropdown">
           <button class="btn btn-outline-dark dropdown-toggle" type="button"  aria-expanded="false">
                Sort By: Placeholder
            </button>
         </div>
          <div id="products">
          {products && products.map(product=>{
            return <Product key={product.rewardId} prodName={product.title} desc={product.desc} image={product.image} points={product.points} />
        })}
      </div>
      {/* <Corousal/> */}
      </section>
  )
}

export default Card;
