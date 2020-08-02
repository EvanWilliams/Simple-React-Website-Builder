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