import React, { Component } from 'react';
import Button from './Button';
import ReactGA from 'react-ga';
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY='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';
sgMail.setApiKey(SENDGRID_API_KEY);


class RequestDemoModal extends Component {
    state={
        inputData:{
            name:'',
            title:'',
            email:''
        }
    }
    handleChange = (e)=>{
        let {inputData} = this.state;
        inputData[e.target.name] = e.target.value;
        this.setState({inputData});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {inputData} = this.state;
        const msg = {
            to: 'test@example.com',
            from: 'test@example.com',
            subject: 'Request data sending to sendgrid',
            text: 'Request with the detaild '+ JSON.stringify(inputData),
            html: `<storng>Name : </strong>${inputData.name} <br /><storng>Title : </strong>${inputData.title} <br /><storng>Email : </strong>${inputData.email} <br />`,
          };
          sgMail.send(msg);
          this.setState({inputData:{name:'',title:'',email:''}},()=>{
            this.props.close();
          });
          ReactGA.event({
            category: 'Request',
            action: 'Request sent'
          });
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