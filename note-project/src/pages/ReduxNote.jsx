import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import Space from "./Space";
import Header from "../Components/Header";
import YeniEkle from "../Components/YeniEkle";

class ReduxNote extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <Profileİnformation />
        <img className="imges" src="/plan14.jpeg"></img>
        <Segment className="denemeee">
          <YeniEkle />
        </Segment>
      </div>
    );
  }
}

export default ReduxNote;
