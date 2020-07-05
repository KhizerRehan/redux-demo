import React, { Component } from "react";
import { connect } from "react-redux";
import { BuyIcecream, AddIcecream } from "../redux";

class IceCreamContainer extends Component {
  constructor(props) {
    super(props);
    console.log("IceCreamContainer Props:", this.props);
  }

  render() {
    const { numberOfIcecreams, BuyIcecream, AddIcecream } = this.props;
    return (
      <div>
        <h2>Number of Icecreams: {numberOfIcecreams} </h2>
        <button
          onClick={() => {
            BuyIcecream();
          }}
        >
          Buy Icecream
        </button>

        <button
          onClick={() => {
            AddIcecream();
          }}
        >
          Add Icecream
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfIcecreams: state.icecream.numberOfIcecreams,
  };
};

const mapDispatchToProps = {
  BuyIcecream,
  AddIcecream,
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
