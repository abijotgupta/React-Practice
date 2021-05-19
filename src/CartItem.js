import React from 'react';

const CartItem = (props) => {
    const {price, title, qty} = props.product; 
    const {
        product, 
        onIncreaseQty, 
        onDecreaseQty, 
        onDeleteProduct
    } = props; 
    
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src = {product.img } style= {styles.image}  />
            </div>
            <div className="right-block">
                <div style={ { fontSize: 25 } }>{title}</div>
                <div style={ { color: 'grey' } }>Rs: {price}</div>
                <div style={ { color: 'grey' } }>{qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image000.flaticon.com/png/512/992/992651.png" 
                        onClick={() => onIncreaseQty(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image000.flaticon.com/png/512/104/104616.png" 
                        onClick={() => onDecreaseQty(product)}  
                    /> 
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://img-premium.flaticon.com/png/512/1214/1214428.png?token=exp=1621419899~hmac=0783bb31794a7b7b94f81d4e51fbb404" 
                        onClick = { ()=> onDeleteProduct(product.id) }
                    />
                </div>
            </div>
        </div>
    );
}

// Styling through object in ReactJS

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
  }

export default CartItem;