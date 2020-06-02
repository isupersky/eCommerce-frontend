import * as actionTypes from '../actions/actionTypes';

const initialState=[] 


const addToCart =(state, action)=>{ 
    let tempState = state;
    let flag =false;

    tempState.forEach((element)=>{
        console.log(element);
        
        if(element.id===action.cartItem.id){
            flag= true;
            console.log(element.Quantity);
            
           let newQuantity = element.Quantity+1;
            element.Quantity=newQuantity;

        }
    })
    if(!flag)    
    {
        tempState.push({
        ...action.cartItem,
        Quantity:1
    });        
    }
    return tempState;
}

const deleteFromCart =(state, action)=>{
    let temp = state;
    
    let temp2 =temp.filter((item)=>{
    
        if(item.id===action.cartItem) {           
            if(item.Quantity===1){
            }
            else{
            item.Quantity=item.Quantity-1 ;  
            return item; 
        }    }
        else if (item.id!==action.cartItem){
        return item; 
    }        
    });
    return temp2;
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.CART_ADD: return addToCart(state,action);
        case actionTypes.CART_DELETE: return deleteFromCart(state,action);
        default: return state;
    }
}
export default reducer;