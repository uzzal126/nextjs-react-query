import Link from "next/link";

const PostCard = ({ id, title, body }) => {
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
                    className="px-5 py-2 bg-red-700 text-white rounded-md inline-block"
                >
                    Delete
                </button>
            </div>
        </article>
    );
};

export default PostCard;
