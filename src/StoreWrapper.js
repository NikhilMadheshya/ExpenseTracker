import React, { useReducer ,useEffect} from 'react';
import {ExpenseAndIncomeReducer,calculateExpenseAndIncome} from './reducer/ExpenseAndIncome';
import {ExpenseAndIncomeProvider} from './Context/ExpenseAndIncome';

function StoreWrapper({children}) {

    const [account,dispatch]=useReducer(ExpenseAndIncomeReducer,{
        current_balance:1000,
        previous_balance:0,
        income:0,
        expense:0,
        history:[
            {money:2000,whereby:'Kishan Yojana'},
            {money:-700,whereby:'Jeans Pant'}
        ] 
    })

    useEffect(() => {
      calculateExpenseAndIncome(account,dispatch);
    }, [])

    return (
       <ExpenseAndIncomeProvider value={{account,dispatch}}>
        {children}
       </ExpenseAndIncomeProvider>
    )
}

export default StoreWrapper
