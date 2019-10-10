import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions/index.js'

const initialState ={
    quotes: [],
    loading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
switch (action.type) {

    case START_FETCHING:
        return{
            ...state,
            loading: true,
            error:''

        };
        case FETCH_SUCCESS:
            return{
                ...state,
                loading: false,
                error: '',
                quotes: action.payload
            }

            case FETCH_FAILURE:
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }

    default:
        return state;
}

}

export default reducer;