import React from 'react'
import PropTypes from 'prop-types'

const CheckoutCard = ({ minus, plus }) => {
    
    
  return (
      <div>
          <div>
              <h4>Added Items 5</h4>

              <div>
                  <button onClick={minus}>-</button>
                  

                  <button onClick={plus}>+</button>
              </div>
              <div>
                  <h4>Total Price: </h4>
              </div>
          </div>
    </div>
  )
}

CheckoutCard.propTypes = {}

export default CheckoutCard