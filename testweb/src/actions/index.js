import axios from 'axios';


export const getCustomers =()=>{

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://localhost:7236/Customer/GetAllCustomer',
        headers: { }
      };
      
       axios.request(config)
      .then((response) => {
        return {
            type :"ITEM_GETCUSTOMERS",
            payload : response.data
            
        }
        //Dispatch({type: "GETCUSTOMERS", payload: response.data});
      })
      .catch((error) => {
        console.log(error);
      });    
}
