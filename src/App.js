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
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=> {
    //      console.log(snapshot);

    //      snapshot.docs.map((doc) => {
    //        console.log(doc.data());
    //        return '';
    //      });

    //      const products = snapshot.docs.map((doc) => {
    //        const data = doc.data();
    //        data['id'] = doc.id;
    //       return data;
    //     });

    //     this.setState ({
    //       products: products,
    //       loading: false
    //     })
    //   })




    //by using onSnapshot auto update occurs to the browser
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

      // products[index].qty += 1;

      // this.setState({
      //   // products:  products since key & value has same name, so we can write shorthand as below
      //   products
      // });

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

      // products[index].qty -= 1;
      // this.setState({
      //   products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(()=> {
          console.log('Doc Updated Successfully')
        })
        .catch((err)=> {
          console.log("Error", err);
        })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const items = products.filter( (item) => item.id !== id);

      this.setState( {
        products: items
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
        img: '',
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
