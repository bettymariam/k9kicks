import React, { Component } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import '../App.css';
import { Table, Button} from 'react-bootstrap';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      showcheckout: false
    }
    this.startCheckout = this.startCheckout.bind(this)
  }

  componentDidMount(){
    let total = 0;
    this.props.cart.map((item) => {
      total += item.price * item.quantity
    })
    this.setState({
      subTotal: total.toFixed(2)
    })
  }

  startCheckout(){
    console.log('hello', this.state, this)
    this.setState({showcheckout: true})
  }

  render() {
    const table = this.props.cart.length > 0 ?
    <div className="container">
      <Table className="cart-table col-md-4" bordered condensed hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item)=>{
            return <CartItem item={item}/>
          })
        }
        </tbody>
        </Table>
        <h4 className="col-md-offset-8 text-right">Subtotal ${this.state.subTotal}</h4>
        <Button bsStyle="primary" className="pull-right"onClick={this.startCheckout}>Checkout</Button>
      </div>
    : <h3 className="col-md-4 col-md-offset-4 text-center">Your cart is empty.<br/> Go Fetch some shoes!</h3>


    return (
      <div className="col-md-8 col-md-offset-2">
        <div className="col-md-8 col-md-offset-2 text-center">
        {this.state.showcheckout!==false ? <h1>Order Details</h1> : <h1>Shopping Cart</h1>}<br/><br/>
        </div>
        {table}
        {this.state.showcheckout!==false ? <Checkout /> : <a href="/products"><h3 className="col-md-4 col-md-offset-4 text-center"><br/><br/>Continue shopping</h3></a>}
      </div>
    );
  }
}
export default ShoppingCart;
