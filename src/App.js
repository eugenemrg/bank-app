import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Transactions from './components/Transactions';
import headerNavigationItems from './data/headers';
import categories from './data/categories';

function App() {

  const [transactionsData, setTransactionsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3007/transactions')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTransactionsData(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <Header navItems={headerNavigationItems} />
      <Form categories={categories} />
      <Transactions transactions={transactionsData} />
    </div>
  );
}

export default App;
