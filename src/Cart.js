import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: ' ',
                    id: 1
                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: ' ',
                    id: 2
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 4,
                    img: ' ',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQty = (product) => {
        console.log('Hey please inc qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products:  products since key & value has same name, so we can write shorthand as below
            products
        })
    }

    handleDecreaseQty = (product) => {
        console.log('Hey please dec qty of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        this.setState({
            // products:  products since key & value has same name, so we can write shorthand as below
            products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter( (item) => item.id !== id);

        this.setState( {
            products: items
        })
    }

    render() {
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = {product} 
                            key = {product.id}
                            onIncreaseQty = { this.handleIncreaseQty }
                            onDecreaseQty = { this.handleDecreaseQty }
                            onDeleteProduct = { this.handleDeleteProduct }
                        />
                    ) 
                })}
            </div>
        );
    }
}
export default Cart;