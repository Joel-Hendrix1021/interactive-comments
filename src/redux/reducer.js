export default function reducer (state, action) {
    switch (action.type) {
    case "ADD_COMMENT":
        return console.log("ADD_COMMENT", action.payload);
    case "SHOW_MODAL":
        return {
            ...state,
            showModal: !state.showModal
        };
    default :
        return state;
    }
}
