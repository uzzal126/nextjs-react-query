import CommentCard from "../comments/CommentCard";

const CommentsList = () => {
    return (
        <div className="grid grid-cols-1 mt-10 space-y-5">
            <h2 className="text-2xl font-semibold mb-5 text-center">
                All comments by post
            </h2>
            <CommentCard />
        </div>
    );
};

export default CommentsList;
