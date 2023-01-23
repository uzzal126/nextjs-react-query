import usePostsQuery from "../../hooks/query/usePostsQuery";

import PostCard from "./PostCard";
import LoadingSpinner from "../elements/LoadingSppiner";

const PostsWrapper = () => {
    const { isLoading, data } = usePostsQuery();

    return (
        <div className="posts-wrapper pb-20">
            <div className="container">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="grid grid-cols-3 gap-5">
                        {data.map((post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostsWrapper;
