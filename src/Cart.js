import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: ' ',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: ' ',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 4,
                    img: ' ',
                    id: 3
                }
            ]
        }
    }
   render() {
       const {products} = this.state;
       return(
        <div className="cart">

            {/* <CartItem /> */}

            {/* Using Props */}
            {/* <CartItem qty={1} price={99} title={"Watch"} img={' '}/> */}

            {products.map((product) => {
                return (
                    <CartItem 
                        product = {product} 
                        key = {product.id}
                        func={() => console.log('Abijot Gupta')}
                        isLoggedIn = {false}
                        jsx = {<h1>Cart</h1>}
                        comp = {<CartItem />}
                    />
                ) 
            })}
        </div>
        );
   }
}
export default Cart;