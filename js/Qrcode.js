import React, { Component } from 'react';
import Back from './Back';
import QrReader from 'react-qr-reader'

class QrCode extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
  }

  handleScan(data){
   this.setState({
     result: data,
   })
 }

 handleError(err){
   console.error(err)
 }

  render() {
    const previewStyle = {
     height: 440,
     width: 320,
   }
    return (
      <div>
        <h2>Qrcode</h2>
        {this.props.children}
        <QrReader
          previewStyle={previewStyle}
          handleError={this.handleError}
          handleScan={this.handleScan.bind(this)}/>
        <br/><br/><br/><p>{this.state.result}</p>
        <Back />
      </div>
    );
  }
}
export default QrCode;
