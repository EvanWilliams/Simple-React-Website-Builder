import * as actionTypes from './actionTypes';
export const addLayoutOption = (layout_option) => {
    return {
        type:actionTypes.ADD_LAYOUT_OPTION,
        layout_option: layout_option
    };
};
export const removeLayoutOption = (layout_id) => {
    return {
        type:actionTypes.REMOVE_LAYOUT_OPTION,
        id: layout_id
    };
};
export const swapLayoutOptions = (source,destination) => {
    return {
        type:actionTypes.SWAP_LAYOUT_OPTIONS,
        source: source,
        destination: destination
    };
};
export const selectLayoutOption = (index) => {
    return {
        type:actionTypes.SELECT_LAYOUT_OPTION,
        index: index
    };
};
export const updateSelectedLayoutOption = (updatedDetail) => {
    return {
        type:actionTypes.UPDATE_SELECTED_LAYOUT_OPTION,
        updatedDetail: updatedDetail
    };
};