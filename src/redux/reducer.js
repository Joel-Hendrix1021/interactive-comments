export default function reducer (state, action) {
    switch (action.type) {
    case "ADD_COMMENT":
        return console.log("ADD_COMMENT", action.payload);
    case "UPDATE_COMMENT":
        return {
            ...state,
            data: {
                currentUser: state.data.currentUser,
                comments: state.data.comments.map(c => {
                    if (c.replies.length > 0) {
                        return {
                            ...c,
                            replies: c.replies.map(r => r.id === 4 ? action.payload : r)
                        };
                    } else {
                        return c;
                    }
                })
            }
        };
    case "DELETE_COMMENT":
        return {
            ...state,
            data: {
                currentUser: state.data.currentUser,
                comments: state.data.comments.map(c => {
                    if (c.replies.length > 0) {
                        return {
                            ...c,
                            replies: c.replies.filter(r => r.id !== action.payload)
                        };
                    } else {
                        return c;
                    }
                })
            }
        };
    case "SHOW_MODAL":
        return {
            ...state,
            showModal: action.payload ? action.payload : !state.showModal
        };

    case "ADD_FORM_CMT":
        return {
            ...state,
            showAddCmts: !state.showAddCmts
        };
    default :
        return state;
    }
}
