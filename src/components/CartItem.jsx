import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, Image, Glyphicon} from 'react-bootstrap';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  calculateTotal(quantity, price){
    this.setState ({
      total : quantity * price
    })
    this.props.getSubTotal(this.state.total);
    return this.state.total
  }

  deleteItem(item){
    this.props.deleteCartItem(item);
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.product_name}</td>
        <td>{this.props.item.quantity}</td>
        <td>{this.props.item.price}</td>
        <td>{this.calculateTotal(this.props.item.quantity, this.props.item.price)}</td>
        <td><a href="#" onClick={() => this.deleteItem(this.props.item)}>X</a></td>
      </tr>
    );
  }
}
export default CartItem;
