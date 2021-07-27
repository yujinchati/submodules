
import React, { Component } from 'react';
import Layer from './page/layer';
import Promotion from "./page/Promotion";

class App extends Component {
  state = {isLayer :false}
  handleLayer = () =>{
    this.setState({isLayer:true});
  }  
  closeLayer = (e) =>{
    e.preventDefault();
    this.setState({isLayer:false});
  }  
  render() {
    const {isLayer} = this.state;
    return (
    <>
    <Promotion onClick={this.handleLayer} isLayer={isLayer} />
    <Layer onClick={this.closeLayer} isLayer={isLayer}  />
    </>
    );
  }
}

export default App;