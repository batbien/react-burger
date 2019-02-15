import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import OrderSummary from "../../components/BuildControls/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-burger";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: null,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios.get("/menu.json")
      .then(
        resp => {
          this.INGREDIENTS = resp.data.ingredients;
          this.BASE_PRICE = resp.data.basePrice;
          this.setState({
            ingredients: (() => {
              let il = { ...this.INGREDIENTS };
              Object.keys(il)
                .map(k => il[k] = 0);
              return il;
            })(),
            totalPrice: this.BASE_PRICE,
          });
        })
      .catch(err => {
        this.props.errMsgOff();
        this.setState({error: true});
      })
  }

  handleLessClick = (event, ingr) => {
    this.setState((prevState) => {
      let ingredients = { ...prevState.ingredients };
      if (ingredients[ingr] === 0)
        return null;
      ingredients[ingr]--;
      let totalPrice = prevState.totalPrice;
      totalPrice -= this.INGREDIENTS[ingr];
      let purchaseable = totalPrice > this.BASE_PRICE;
      return { ingredients, totalPrice, purchaseable };
    });
  };

  handleMoreClick = (event, ingr) => {
    this.setState((prevState) => {
      let ingredients = { ...prevState.ingredients };
      let totalPrice = prevState.totalPrice;
      ingredients[ingr]++;
      totalPrice += this.INGREDIENTS[ingr];
      let purchaseable = true;
      return { ingredients, totalPrice, purchaseable };
    });
  };

  handlePurchaseClick = (event) => {
    this.setState({ purchasing: true });
  };

  handleCancelPurchasing = (event) => {
    this.setState({ purchasing: false });
  };

  handleContinueClick = (event) => {
    this.setState({ loading: true });
    let order = {
      ingredients: this.state.ingredients,
      customer: {
        name: "foo",
        email: "foo@foo.com"
      }
    };
    axios.post("/order.json", order)
      .then(
        resp => {
          this.setState({ loading: false, purchasing: false });
        })
      .catch(
        err => {
          this.setState({ loading: false, purchasing: false });
        });
  };

  getDisabledIngrs = () => Object.keys(this.state.ingredients)
    .reduce(
      (obj, ingr) => {
        obj[ingr] = this.state.ingredients[ingr] === undefined || (this.state.ingredients[ingr] === 0);
        return obj;
      }, {});

  render() {

    // Main content and orderSummary must wait for fetched data from server
    let mainContentComp = null;
    let orderSummary = null;
    if (!this.state.ingredients || !this.state.totalPrice)
      mainContentComp = <Spinner />;
    else {
      mainContentComp =
        <Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <p>Total Price: {this.state.totalPrice}€</p>
          <BuildControls ingredientList={Object.keys(this.INGREDIENTS)}
            handleLessClick={this.handleLessClick}
            handleMoreClick={this.handleMoreClick}
            handlePurchaseClick={this.handlePurchaseClick}
            disabledIngredients={this.getDisabledIngrs()}
            purchaseable={this.state.purchaseable}/>
        </Fragment>;
      orderSummary = <OrderSummary ingredients={this.state.ingredients}
                      totalPrice={this.state.totalPrice}
                      handleCancelClick={this.handleCancelPurchasing}
                      handleContinueClick={this.handleContinueClick}/>;
    }

    if ( this.state.error)
        mainContentComp = <p>Cannot fetch data from server.</p>;

    // Modal component
    let modalContent = null;
    if (this.state.loading)
      modalContent = <Spinner/>;
    else
      modalContent = orderSummary;
    return (
      <Fragment>
        {mainContentComp}
        <Modal shown={this.state.purchasing}
        handleBackdropClick={this.handleCancelPurchasing}>
          {modalContent}
        </Modal>
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
