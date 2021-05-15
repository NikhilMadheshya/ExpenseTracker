import React, { useContext } from 'react'
import {ExpenseAndIncome} from '../../Context/ExpenseAndIncome';
import styles from './History.module.css'

function History() {
const {account,dispatch}=useContext(ExpenseAndIncome)

const deleteHistory=()=>{
    dispatch({type:'UPDATE_ACCOUNT',payload:{...account,history:[]}})
}

if(account.history.length<1)
return <></>

    return (
        <div >
            <div className={styles.action}>
                <h2 className={styles.title}>History</h2>
                <button className={styles.deleteHistory} onClick={deleteHistory}>
                    <i className="fa fa-trash" />
                </button>
            </div>
            <div className={styles.historyInfo}>
              {
                  account.history.map((hist,ind)=>{
                    
                    if(hist.money<0)
                    {
                        return(
                            <div key={ind} className={styles.credit}>
                            <h4>{hist.whereby}</h4>
                             <h4>{hist.money}</h4>
                            </div>)
                    }
                    else{
                        return(
                            <div key={ind} className={styles.debit}>
                            <h4>{hist.whereby}</h4>
                             <h4>+{hist.money}</h4>
                            </div>)
                    }

                  })
              }

            </div>
        </div>
    )
}

export default History
