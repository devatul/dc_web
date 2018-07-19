import React, { Component } from 'react';
import Button from './Button';

class RequestDemoModal extends Component {
    state={
        inputData:{}
    }
    handleChange = (e)=>{
        let {inputData} = this.state;
        console.log('sssssssss',e.target);
        inputData[e.target.name] = e.target.value;
        this.setState({inputData});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {inputData} = this.state;
        console.log('inputData',inputData);
        // this.props.submitData(inputData);
    }
  render() {
    let {inputData} = this.state;
    return (
        <div className={`request-demo-modal ${this.props.openRequest ? 'open' : ''}`}>
        <div className="request-demo-close red" onClick={this.props.close}>CLOSE</div>
        <form id="request-demo-form">
           <div className="request-demo-form-wrapper m-b-5 m-h-a t-a-l w-100p">
                <div className="input-field-container">
                    <label>Name:</label>
                    <input id="name" name='name' type="text" value={inputData.name} onChange={this.handleChange}/>         
                </div>
                <div className="input-field-container">
                    <label>Title:</label>
                    <input id="title" name='title' type="text" value={inputData.title} onChange={this.handleChange}/>         
                </div>
                <div className="input-field-container">           
                    <label>Work Email:</label>
                    <input id="email" name='email' type="text" value={inputData.email} onChange={this.handleChange}/>         
                </div>
           </div>
            <Button _classname="send-request-submit-btn" label="SEND REQUEST" onClick={this.handleSubmit} />
        </form>
        <div id="request-demo-form-success" className="request-demo-form-success">
           <h1>Thank you.<br />We will contact you shortly</h1>
        </div>
     </div>
    );
  }
}

export default RequestDemoModal;