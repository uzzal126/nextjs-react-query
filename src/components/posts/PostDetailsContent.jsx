import usePostQuery from "../../hooks/query/usePostQuery";

const PostDetailsContent = () => {
    const { data, isLoading } = usePostQuery();

    return (
        <div className="grid grid-cols-1">
            <h2 className="text-2xl font-semibold mb-5 text-center">
                Post Details
            </h2>
            {isLoading ? (
                <h2>Data is loading...</h2>
            ) : (
                <article className="border p-5">
                    <h1 className="text-xl font-semibold capitalize">
                        {data.title}
                    </h1>
                    <p>{data.body}</p>
                </article>
            )}
        </div>
    );
};

export default PostDetailsContent;
