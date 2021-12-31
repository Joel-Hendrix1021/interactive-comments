import { LineThread, Thread } from ".";
import Comment from "../coment/Comment";

const CardComent = ({ comment }) => {
    console.log("line", comment.replies);
    return (
        <>
            <Comment comment={comment}/>
            {
                comment.replies.length > 0 && (
                    <Thread>
                        <LineThread></LineThread>
                        {
                            comment.replies.map(item => {
                                return (
                                    <Comment key={item.id} comment={item}/>
                                );
                            })
                        }
                    </Thread>
                )
            }
        </>
    );
};

export default CardComent;

//
