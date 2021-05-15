
export const calculateExpenseAndIncome=(state,dispatch)=>{
const history=state.history;


if(history.length>0)
{
    let income=state.income;
    let expense=state.expense;
    let current_balance=state.current_balance;
    let previous_balance=current_balance
   
    
   
    expense=history.reduce((exp,hist)=>{
    if(hist.money<0)
    { 
            return exp-hist.money; // 0-(-2)
    }
    else{
             return exp;
    }
    },0)

    income=history.reduce((inc,hist)=>{
        if(hist.money>0)
        { 
                return inc+hist.money; 
        }
        else{
                 return inc;
        }
    },0)

  current_balance=(current_balance+income)-expense


  dispatch({type:'UPDATE_ACCOUNT',payload:{
      income,expense,current_balance,previous_balance,history
  }})
}


}



export const ExpenseAndIncomeReducer=(state,action)=>{

    switch(action.type)
    {
        case 'UPDATE_ACCOUNT':
            return {...state,...action.payload};
        default: return state;    
    }

}