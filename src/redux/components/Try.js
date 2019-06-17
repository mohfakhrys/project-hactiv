import React, { Component } from 'react';
import ContactList from '../containers/contact-list'
import ContactDetail from '../containers/contact-detail'
import Footer from '../../component/Footer'

export default class Try extends Component {
  render() {
    return (
      <div className="container jumbotron" style={{}}>
      	<ContactDetail />
        <ContactList />
        <Footer/>
      </div>
    );
  }
}
