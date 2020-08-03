import * as actionTypes from './actionTypes';
import { updateSelectedLayoutOption } from './BuildBox';

const initialState = {
    layoutOptions:[
        {
            "type":"Page Header",
            "id":"PageHeader"
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
    selectedLayoutOptions:[],
    selectedLayoutDetail:null,
    selectedLayoutIndex: null
};
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_LAYOUT_OPTION:
            debugger;
            return{
                ...state,
                selectedLayoutOptions:[
                    ...state.selectedLayoutOptions,
                    action.layout_option
                ]
            }
        case actionTypes.REMOVE_LAYOUT_OPTION: {
            let updatedSelectedLayoutDetail = {...state.selectedLayoutDetail}
            let updatedselectedLayoutIndex = state.selectedLayoutIndex
            let updatedLayoutOptions = state.selectedLayoutOptions.filter((element) => {
                if(element.id === action.id){
                    if(state.selectedLayoutDetail.id === action.id){
                        updatedSelectedLayoutDetail = null;
                        updatedselectedLayoutIndex = null;
                    }
                }
                return element.id !== action.id
            });
            return{
                ...state,
                selectedLayoutOptions:[
                    ...updatedLayoutOptions,
                ],
                selectedLayoutDetail: updatedSelectedLayoutDetail,
                selectedLayoutIndex: updatedselectedLayoutIndex
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
        case actionTypes.SELECT_LAYOUT_OPTION: {
            let updatedLayoutOptions = state.selectedLayoutOptions.map((element,index) => {
                let selected = false;
                if(index === action.index){
                    selected = true
                }
                return {
                    ...element,
                    selected: selected
                }
            })
            return{
                ...state,
                selectedLayoutOptions: [
                    ...updatedLayoutOptions
                ],
                selectedLayoutDetail: {...state.selectedLayoutOptions[action.index]},
                selectedLayoutIndex: action.index
                
            }
        }
        case actionTypes.UPDATE_SELECTED_LAYOUT_OPTION: {
            let updatedLayoutOptions = [...state.selectedLayoutOptions]
            updatedLayoutOptions[state.selectedLayoutIndex]["detail_data"] = action.updatedDetail["detail_data"];
            return{
                ...state,
                selectedLayoutOptions: [
                    ...updatedLayoutOptions
                ],
                selectedLayoutDetail: action.updatedDetail,            }
        }
        default:
            return state
    }
};

export default reducer;