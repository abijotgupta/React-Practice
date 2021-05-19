import Cart from './Cart';
import React from 'react';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount () {
    this.db
      .collection('products')
      .onSnapshot((snapshot)=> {
         console.log(snapshot);

         snapshot.docs.map((doc) => {
           console.log(doc.data());
           return '';
         });

         const products = snapshot.docs.map((doc) => {
           const data = doc.data();
           data['id'] = doc.id;
          return data;
        });

        this.setState ({
          products: products,
          loading: false
        })
      })
  }

  handleIncreaseQty = (product) => {
      console.log('Hey please inc qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty + 1,
        })
        .then(()=> {
          console.log('Doc Updated Successfully')
        })
        .catch((err)=> {
          console.log("Error", err);
        })
  }

  handleDecreaseQty = (product) => {
      console.log('Hey please dec qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 0) {
          return;
      }
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(()=> {
          console.log('Updated Successfully')
        })
        .catch((err)=> {
          console.log("Error", err);
        })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const docRef = this.db.collection('products').doc(id);
      docRef
        .delete()
        .then(()=> {
          console.log('Deleted Successfully')
        })
        .catch((err)=> {
          console.log("Error", err);
        })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0) {
        cartTotal += product.qty * product.price;
      }
      return '';
    });

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: 'data:image/jpeg;base64,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',
        price: 7000,
        qty: 8,
        title: 'Washing Machine',
      })
      .then((docRef) => {
        console.log("Added Product is", docRef);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() { 
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count = { this.getCartCount() }/>
        <button onClick = {this.addProduct} style = {{ padding: 20, fontSize: 20}} >Add a Product</button>
        <Cart 
          products = {products} 
          onIncreaseQty = { this.handleIncreaseQty }
          onDecreaseQty = { this.handleDecreaseQty }
          onDeleteProduct = { this.handleDeleteProduct }
        />
        { loading && <p>Loading products.....</p>}
        <div style={ { padding: 10, fontSize: 20 } }>
          TOTAL: { this.getCartTotal() }
        </div>
      </div>
    );
  }
}

export default App;