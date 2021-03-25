import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ' '
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);   
        //instead this use arrow functions as they automatically bind state
    }

    increaseQuantity = () => {
        
        //console.log('this.state', this.state);

        //setState form 1
        //this state do shallow merging.......which means if I change only qty then only qty will change
        // this.setState({
        //     qty: this.state.qty + 1
        // }); 

        //setState form 2
        //This also do shallow merging
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render() {
        const {price, title, qty} = this.state; 
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} />
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
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1616648553~hmac=4587316fbd97170d0c651e55d06f9167" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1616648589~hmac=50bae13d37154716795ae4d693d81101" 
                            onClick={this.decreaseQuantity}   
                        /> 
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616648620~hmac=9029762d62fbaa53f651a91e89e92bea" 
                            onClick
                        />
                    </div>
                </div>
            </div>
        );
    }
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