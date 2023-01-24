import Link from "next/link";
import useDeleteMutation from "../../hooks/mutation/useDeleteMutation";

const PostCard = ({ id, title, body }) => {
    const { mutate, isLoading } = useDeleteMutation();

    const postDeleteHandler = () => {
        mutate(id);
    };

    const postEditHandler = () => {};

    return (
        <article className="card border p-5">
            <h3 className="mb-3">{title}</h3>
            <p>{body}</p>
            <div className="flex space-x-5">
                <Link
                    href={`/posts/${id}`}
                    className="px-5 py-2 bg-primary text-white rounded-md inline-block"
                >
                    Read More
                </Link>
                <button
                    type="button"
                    className="px-5 py-2 bg-primary text-white rounded-md inline-block"
                    onClick={() => postEditHandler(id)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="px-5 py-2 bg-red-700 text-white rounded-md inline-block"
                    onClick={() => postDeleteHandler(id)}
                >
                    {isLoading ? "deleting..." : "Delete"}
                </button>
            </div>
        </article>
    );
};

export default PostCard;
