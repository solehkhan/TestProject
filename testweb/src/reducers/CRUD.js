
const initialstate  ={
   data: []

}; 

const getCustomerData =(state=initialstate,action)=>{
switch(action.type)
{
  case "ITEM_GETCUSTOMERS" :

      let data = action.payload;
        return {...state,data};
        default:return state;
}
}

// function reducer (state = initalState, action)
// {
//     switch (action.type) {
//         case ITEMS_REQUESTED:
//             return { ...state, itemsRequested: true }
//         case ITEMS_RECEIVED:
//             return { ...state, itemsRequested: false, items: action.items }
//         default
//             return state;
//     }
// }


export default getCustomerData