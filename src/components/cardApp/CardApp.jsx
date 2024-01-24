import React, { useState } from 'react'
import { productData } from '../assets/data/productData';
import "./cardApp.style.css"
import ProductCard from '../pruductCard/ProductCard';
import CheckoutCard from '../checkoutCard/CheckoutCard';

const CardApp = () => {
    const [productList, setProductList] = useState(productData);
    const [cardList, setCardList] = useState([])

    const addProductToCard = (product) => {
        // console.log("product", product)
        const productExists = cardList.find((el) => el.name === product.name);

        if (productExists) {
            const updatedCatdList = cardList.map((el) => {
 
                if (el.name === product.name) {
                    return { ...el, count: el.count + 1 };
                } else {
                    return el;
                }
            });

            setCardList(updatedCatdList)
        } else {
            //now we update the card
            setCardList([...cardList, { ...product, count: 1 }])
        }
    }


    return (
        <div>
            <ul>
                {cardList.length &&
                    cardList.map((el, index) => <li key={index}>
                        <p> {el.name}     ({el.count})</p></li>)}
            </ul>

      <div className='cardApp-container'>
          {productList.map((el, index) => (
              <ProductCard
                  key={index}
                  product={el}
                  addProductToCard= {addProductToCard}
              />
          )
             
          )}
            </div>
            <CheckoutCard/>
            </div>
  )
}

export default CardApp