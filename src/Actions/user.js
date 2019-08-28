import {USER} from './types';

import {AGE} from './types';

User={
    name:"zaheer",
    email:"zaheerahamad92001@gmail.com",
}
export const User_info=(data)=>{
    return{

    type:USER,
     User:data ,
    
  }
}

export const UserAge=(age)=>{
    return{
        type:AGE,
        age:age
    }
}

