
import {DELETE_USER} from "./action-types";
import { v4 as uuidv4 } from "uuid"

const initialState = {
    usersArray: [
        {
            id: uuidv4(),
            name: 'Leanne',
            username: 'Bret',
            email: "Sincere@april.biz",
        },
        {
            id: uuidv4(),
            name: "Ervin",
            username: "Antonette",
            email: "Shanna@melissa.tv",

        },
        {
            id: uuidv4(),
            name: "Chelsey",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
        },
        {
            id: uuidv4(),
            name: "Dennis",
            username: "Leopoldo_Corkery",
            email: "Karley_Dach@jasper.info",
        },
        {
            id: uuidv4(),
            name: 'Ann',
            username: 'Annie',
            email: "Annie@april.biz",
        },
        {
            id: uuidv4(),
            name: "Ervin",
            username: "Ervin",
            email: "Ervin91@melissa.tv",

        },
        {
            id: uuidv4(),
            name: "Chris",
            username: "ChrisC",
            email: "ChrisC@annie.ca",
        },
        {
            id: uuidv4(),
            name: "Daniel",
            username: "Daniel_im a cooker",
            email: "Daniel@jasper.info",
        }
    ]
}

    const usersReducer = (state = initialState,action)=>{
        switch(action.type){
            case DELETE_USER :
                return{
                    ...state,
                    usersArray:state.usersArray.filter(item=> item.id !== action.id)
                }
            default : return state
        }
    }


export default  usersReducer