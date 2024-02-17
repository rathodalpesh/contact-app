import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: 1,
      name: "Alpesh Rathod",
      email: "alpeshdiu33@yopmail.com",
    }, {
      id: 2,
      name: "Shatish Rathod",
      email: "shatish@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
