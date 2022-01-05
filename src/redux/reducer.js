export default function reducer (state, action) {
    console.log(action.payload);
    switch (action.type) {
    case "ADD_COMMENT":
        return {
            ...state,
            comments: action.payload.id === undefined
                ? [...state.comments, action.payload.newComment]
                : state.comments.map(c => {
                    if (c.id === action.payload.id) {
                        return {
                            ...c,
                            replies: [...c.replies, action.payload.newComment]
                        };
                    }
                    return c;
                })
        };
    case "UPDATE_COMMENT":
        return {
            ...state,
            comments: action.payload.repliesId === undefined
                ? state.comments.map(c => c.id === action.payload.updateComent.id ? action.payload.updateComent : c)
                : state.comments.map(c => {
                    if (c.id === action.payload.repliesId) {
                        return {
                            ...c,
                            replies: c.replies.map(r => r.id === action.payload.updateComent.id ? action.payload.updateComent : r)
                        };
                    }
                    return c;
                })

        };
    case "DELETE_COMMENT":
        return {
            ...state,
            comments: action.payload.repliesId === undefined
                ? state.comments.filter(c => c.id !== action.payload.comentId)
                : state.comments.map(c => {
                    if (c.id === action.payload.repliesId) {
                        return {
                            ...c,
                            replies: c.replies.filter(r => r.id !== action.payload.comentId)
                        };
                    }
                    return c;
                })
        };
    case "COUNT_PLUS":
        return {
            ...state,
            comments: state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score + 1 } : c)
        };
    case "COUNT_MINUS":
        return {
            ...state,
            comments: state.comments.map(c => c.id === action.payload.id ? { ...c, score: c.score - 1 } : c)
        };
    default :
        return state;
    }
}
