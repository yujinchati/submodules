
import React, { Component } from 'react';
import Layer from './page/layer';
import Promotion from "./page/Promotion";

class App extends Component {
  state = {
    isLayer :false
  }
  handleLayer = (result) =>{
    this.setState({isLayer:result});
  }  
  render() {
    const {isLayer} = this.state;
    const {handleLayer} = this;

    return (
    <>
    <Promotion onLayer={handleLayer} isLayer={isLayer} />
    <Layer isLayer={isLayer} onLayer={handleLayer} />
    </>
    );
  }
}

export default App;