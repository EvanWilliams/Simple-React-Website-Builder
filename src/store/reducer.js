import * as actionTypes from './actionTypes';

const initialState = {
    layoutOptions:[
        {
            "type":"Header Element",
            "id":"HeaderElement"
        },
        {
            "type":"Image Element",
            "id":"ImageElement1"
        },
        {
            "type":"Image Element",
            "id":"ImageElement2"
        },
        {
            "type":"Description Element",
            "id":"DescriptionElement"
        },
        {
            "type":"Large Image Element",
            "id":"LargeImageElement"
        }
    ],
    selectedLayoutOptions:[]
};
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_LAYOUT_OPTION:
            return{
                ...state,
                selectedLayoutOptions:[
                    ...state.selectedLayoutOptions,
                    action.layout_option
                ]
            }
        case actionTypes.REMOVE_LAYOUT_OPTION: {
            debugger;
            let updatedLayoutOptions = state.selectedLayoutOptions.filter((element) => {
                return element.id != action.id
            });
            return{
                ...state,
                selectedLayoutOptions:[
                    ...updatedLayoutOptions,
                ]
            }
        }
        case actionTypes.SWAP_LAYOUT_OPTIONS: {
            let updatedLayoutOptions = [...state.selectedLayoutOptions]
            updatedLayoutOptions[action.source] = state.selectedLayoutOptions[action.destination];
            updatedLayoutOptions[action.destination] = state.selectedLayoutOptions[action.source];
            return{
                ...state,
                selectedLayoutOptions:[
                    ...updatedLayoutOptions,
                ]
            }
        }
        default:
            return state
    }
};

export default reducer;