import Header from "../header";
import withBookstoreService from "../hoc"
import { Routes, Route } from "react-router-dom";
import "./App.css"
import { HomePage, CartPage } from "../pages"
import ShopHeader from "../shop-header";

const App = ({ bookstoreService }) => {
  return (
    <main role="main" className="container">
      <Header />
      <ShopHeader numItems={23} total={14}/>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="*" element={<h1 className="catalog-wrapper">This page not found</h1>}/>
      </Routes>
    </main>
  );
}

export default withBookstoreService()(App);
