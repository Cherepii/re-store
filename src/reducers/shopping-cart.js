const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if(idx === -1){
    return [
      ...cartItems,
      item
    ]
  }else {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1),
    ]
  }
}

const updateCartItem = (book, item = {}, quality) => {
  const { id = book.id, 
          name = book.name, 
          count = 0, 
          total = 0, } = item;

  return {
    id, 
    name, 
    count: count + quality, 
    total: book.price*quality + total
  }
}

const updateOrder = (state, bookId, quality, totalQuality) => {
  const { bookList: {books}, shoppingCart: {cartItems} } = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quality);
  
  return {
    orderTotal: state.shoppingCart.orderTotal + totalQuality,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}

const updateShoppingCart = (state, action) => {
  if(state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  const book = state.bookList.books.find(({id}) => id === action.payload);
  
  switch(action.type) {
    case 'BOOK_ADDED_TO_CART' :
      return updateOrder(state, action.payload, 1, book.price);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1, -book.price);
      
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload );
      const { count } = item;
      const { price } = book;
      return updateOrder(state, action.payload, -count, -price*count);
    
    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart;