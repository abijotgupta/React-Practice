import React from 'react';

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ' '
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);   
    //     //instead this use arrow functions as they automatically bind state

    //     //this.testing();
    // }

    
    
    // In case of AJAX call or in case of promise React donot perform batching
    // Also in that case setState call is Synchronous
    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done')
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         //In case of setState setState call is Synchronous
    //         //this.setState({ qty: this.state.qty + 10});


    //         //Here in case of promise our Component is re-rendered 3 times
    //         this.setState({ qty: this.state.qty + 10});
    //         this.setState({ qty: this.state.qty + 10});
    //         this.setState({ qty: this.state.qty + 10});

    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity = () => {
        
        //console.log('this.state', this.state);
        //setState form 1
        //this state do shallow merging.......which means if I change only qty then only qty will change
        // this.setState({
        //     qty: this.state.qty + 1
        // }); 


        //Even though I'm rendering 3 times, but React only renders it for single time. 
        //This is because of the concept of batching.
        //By batching I mean the event handler batch all the setStates as a single unit.
        //Therefore these 3 setState calls merge into one batch i.e, one setState.

        //In short, React will take only last call setState object. 
        // this.setState({
        //     qty: this.state.qty + 5
        // }); 

        // this.setState({
        //     qty: this.state.qty + 6
        // }); 

        // this.setState({
        //     qty: this.state.qty + 1
        // }); 


        //setState form 2
        //This also do shallow merging
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });


        //Here our quantity increases by 3 but React only render once i.e, here also React performing batching
        //Check inside render func console.log('render') in console

        //This 2nd form basically uses Queue and pass the setState callback to it
        //Since here we have access to prevState so react ensure that prevState value should be updated
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });

          // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });

        //setState call is basically Asynchronous call
        //therefore we donot know when it will be finished
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // });
        // console.log(this.state);

        //this setState contains 2 callback
        //here the 2nd callback will be called whenever 1st callback will be finished
        //this 2nd callback we can pass in the first state also
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log(this.state);
        });
    }
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render() {
        //console.log('render');
        console.log('this.props', this.props);
        const {price, title, qty} = this.props.product; 
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