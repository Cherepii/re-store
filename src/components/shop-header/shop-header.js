import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./shop-header.css"

const ShopHeader = ({cartItems, orderTotal}) => {
  return (
    <header className="shop-header d-flex">
      <Link to="/" className="logo text-dark" href="#" >ReStore</Link>
      <Link to="/cart" className="cart-text">
        <i className="fa fa-shopping-cart cart-icon" />
        {cartItems.length} books (${orderTotal})
      </Link>
    </header>
  );
}

const mapStateToProps = ({shoppingCart: {orderTotal, cartItems}}) => {
  return {orderTotal, cartItems};
}

export default connect(mapStateToProps)(ShopHeader);