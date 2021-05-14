import React from 'react';

const Navbar = (props) => {
    return (
        <div style={ styles.nav } >
            <div style={ styles.cartIconContainer }  >
                <img style={ styles.cartIcon } src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1620986767~hmac=adc2b965470b41e2c31e37bbee7ab50d" alt="cart-icon"></img>
                <span style={ styles.cartCount }>{ props.count }</span>
            </div>
        </div>
    );
}

// Styling through object in ReactJS

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: '#4267b2',
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        top: -9,
        right: 0,
        padding: '4px 8px',
        background: 'yellow',
        position: 'absolute',
        borderRadius: '50%'
    }
  }

export default Navbar ; 