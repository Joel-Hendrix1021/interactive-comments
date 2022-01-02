export const actionShowModal = (show) => {
    return {
        type: "SHOW_MODAL"
    };
};

export const actionDeleteCmt = (id) => {
    return {
        type: "DELETE_COMMENT",
        payload: id
    };
};

export const actionAddFormCmt = () => {
    return {
        type: "ADD_FORM_CMT"
    };
};

export const actionUpdateComt = (newCmt) => {
    return {
        type: "UPDATE_COMMENT",
        payload: newCmt
    };
};
