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
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620893019~hmac=c5fdea1b0042ca1445c07560866e46f9" 
                        onClick={() => onIncreaseQty(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620893058~hmac=0406e5f6a683e780063b76efd6acf73f" 
                        onClick={() => onDecreaseQty(product)}  
                    /> 
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620893090~hmac=4de5cb7a097a07020c1976ee0e74ddce" 
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