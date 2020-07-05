import React, { Component } from "react";
import { connect } from "react-redux";
import { BuyCake, AddCake } from "../redux";

class CakeContainer extends Component {
  constructor(props) {
    super(props);
    console.log("CakeContainer Props", this.props);
  }
  render() {
    return (
      <div>
        <h2>Number of cakes: {this.props.numberOfCakes} </h2>
        <button
          onClick={() => {
            this.props.BuyCake();
          }}
        >
          Buy Cake
        </button>

        <button
          onClick={() => {
            this.props.AddCake();
          }}
        >
          Add Cake
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = {
  BuyCake,
  AddCake,
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
