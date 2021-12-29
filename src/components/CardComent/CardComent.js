import Comment from "../coment/Comment";

const CardComent = ({ comment }) => {
    console.log(comment.replies);
    return (
        <>
            <Comment comment={comment}/>
            {
                comment.replies.map(item => {
                    return (
                        <div key={item.id} className="thread">
                            <Comment comment={item}/>
                        </div>
                    );
                })
            }
        </>
    );
};

export default CardComent;
