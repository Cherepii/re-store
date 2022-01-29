import { connect } from "react-redux";
import { bookAddedToCart, 
         bookRemovedFromCart, 
         ALLBooksRemovedFromCart } from "../../actions"
import "./shopping-cart-table.css"

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td style={{width:'25%'}}>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td className="but-block">
          <button 
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"/>
          </button>
          <button 
            className="btn btn-outline-success"
            onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle"/>
          </button>
          <button 
            className="btn btn-outline-warning"
            onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr> 
    )
  }
  
  return (
    <div className="shopping-cart-table">
      <h2 className="order-title">Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="cart-total">
        Total: ${total}
      </div>
    </div>
  );
}

const mapStateToProps = ({ shoppingCart: {cartItems, orderTotal} }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: ALLBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);