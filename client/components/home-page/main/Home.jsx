import React, { PropTypes } from 'react';

import './../../../styles/Home.scss';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import Header from './../header/Header.jsx';
import SlideShow from './SlideShow.jsx';
import ModalContainer from './ModalContainer.jsx';

const Home = (props) => {
  const verified = props.auth === undefined ? false : props.auth.verified;
  if (verified === true) {
    return (
      <div id="homeContainer">
        <Header
          toggleView={props.toggleView}
          auth={props.auth}
          handleLogout={props.handleLogout}
          handleSearch={props.handleSearch}
        />
        <div className="spacer">
          &nbsp;
        </div>
        <SlideShow auth={props.auth} />
        <div id="contentContainer">
          <ModalContainer
            toggleModal={props.toggleModal}
            modalActive={props.modalActive}
            products={props.products}
            addToCart={props.addToCart}
            verified={props.auth.verified}
          />
          <ProductList
            sortProducts={props.sortProducts}
            products={props.products}
            addToCart={props.addToCart}
            auth={props.auth}
            toggleModal={props.toggleModal}
            modalActive={props.modalActive}
          />
          <Cart
            submitOrder={props.submitOrder}
            removeFromCart={props.removeFromCart}
            cart={props.cart}
            auth={props.auth}
          />
        </div>
        <footer />
      </div>
    );
  }
  return (
    <div id="homeContainer">
      <Header
        toggleView={props.toggleView}
        auth={props.auth}
        handleSearch={props.handleSearch}
      />
      <div className="spacer">
        &nbsp;
      </div>
      <SlideShow auth={props.auth} />
      <div id="contentContainer">
        <ModalContainer
          toggleModal={props.toggleModal}
          modalActive={props.modalActive}
          products={props.products}
          addToCart={props.addToCart}
          verified={props.auth.verified}
        />
        <ProductList
          sortProducts={props.sortProducts}
          products={props.products}
          addToCart={props.addToCart}
          auth={props.auth}
          toggleModal={props.toggleModal}
          modalActive={props.modalActive}
        />
        <Cart
          submitOrder={props.submitOrder}
          removeFromCart={props.removeFromCart}
          cart={props.cart}
          auth={props.auth}
        />
      </div>
      <footer />
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  cart: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  modalActive: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Home;
