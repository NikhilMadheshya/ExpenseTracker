import React from 'react';
import styles from './App.module.css';
import BalanceInfo from './Components/balance/BalanceInfo';
import History from './Components/history/History';
import Form from './Components/Form/Form';

function App() {

    return (
       <div className={styles.container}>
           <h1 className={styles.app_title}>Expense Tracker</h1>
           <BalanceInfo/>
           <History/>
           <Form/>
       </div>
    )
}

export default App
