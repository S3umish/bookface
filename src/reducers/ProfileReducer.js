
export default function ProfileReducer(state = {profiles: []}, action) {

    switch(action.type){

        case 'ADD_PROFILE':
            return {...state, profiles: [...state.profiles, action.paylod]}


        default: 
        return state


    }

}