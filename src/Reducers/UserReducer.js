import { USER } from '../Actions/types';
import {AGE} from '../Actions/types';

const initialState = {
    user: [],
    age:'',
    //name:'',
    //email:'',
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER:
            return {
                ...state,
                user:action.User
            }
            case AGE:
                    console.log('action.age',action.age)
                    return {
                        ...state,
                        age:action.age
                      };

        default:
            return state;
    }

}

export default UserReducer;
