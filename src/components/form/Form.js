import React from 'react';
import { ExpenseAndIncome } from '../../Context/ExpenseAndIncome';
import styles from './Form.module.css';

function Form() {

    const [info,setInfo]=React.useState({money:0,whereby:''});

    const {account,dispatch}=React.useContext(ExpenseAndIncome);


    const handleChange=({target:{name,value}})=>
    {
           if(name==="money")
             value=Number(value);
               
            setInfo({...info,[name]:value})
    }

    const addTransaction=()=>{

      if(info.money===0 || info.whereby==='')
      {
          alert('Please fill both fields');
          return 0;
      }  
      if(isNaN(info.money))
      {
          alert("Money entry should be digits");
          return 0;
      }

      performTransaction()

    }


    function performTransaction(){
       
    let income=account.income;
    let expense=account.expense;
    let current_balance=account.current_balance;
    let previous_balance=account.previous_balance;

    previous_balance=current_balance
    

    if(info.money<0)
    {
        expense-=(info.money) 
        current_balance+=info.money
    }
    else{
        income+=info.money
        current_balance+=info.money
    }

    let history=[...account.history,info];
  
    dispatch({type:'UPDATE_ACCOUNT',payload:{
        income,expense,current_balance,previous_balance,history
    }})


    }


    return (
        <div className={styles.form}>
            <h2 className={styles.title}>Add New Transaction</h2>

            <div className={styles.field}>
            <h2>Info</h2>   
             <input type="text" name="whereby"  onChange={handleChange} placeholder="Where you pay or paid by" />
            </div>

            <div className={styles.field}>
            <h2>Amounts</h2>
            <h3>(negative - expense,postitive + income)</h3>   
           <input type="text" name="money" onChange={handleChange}  placeholder="Enter transaction amount" />
          </div> 

          <button className={styles.transactionButton} onClick={addTransaction}>
             Add Transaction
          </button>

        </div>
    )
}

export default Form
