import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddressBook from './Components/AddressBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressBook />
  </React.StrictMode>
);