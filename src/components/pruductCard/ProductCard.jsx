import React from 'react'
import "./productCard.style.css"
import PropTypes from 'prop-types'

const ProductCard = ({ product,addProductToCard }) => {
    const { imageUrl, description, price, name, inStock } = product
    
    const onAddClickHandler = () => {
        addProductToCard(product)
    }
  return (
      <div className='productCard-container'>
          <img src={imageUrl} alt={name} />
          <div className='name'>
              
          <h4>{name}</h4>
          <p>In Stock: {inStock}</p>
          </div>
          <p>{description}</p>
          <h4 className='price'>{ price} $</h4>
          <button className='btn-add'  onClick={onAddClickHandler}>ADD</button>
          
      </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard