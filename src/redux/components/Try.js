import React, { Component } from 'react';
import ContactList from '../containers/contact-list'
import ContactDetail from '../containers/contact-detail'

export default class Try extends Component {
  render() {
    return (
      <div className="head">
        <h1 className="font-weight-bold mb-4 ml-5 mt-2 text-white">Heroes</h1>
      <div className="container jumbotron" style={{marginTop:"20px"}}>
      	<ContactDetail />
        <ContactList />
      </div>
      </div>
    );
  }
}
