import "./common.css"
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";
import React from "react";

const HomePage = () => {
  return (
    <>
     <BookList />
     <ShoppingCartTable />
    </>
    
  );
}

export default HomePage;