const CommentForm = () => {
    const commentSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="grid grid-col-1">
            <form
                className="border p-5 mb-5 space-y-5"
                onSubmit={commentSubmitHandler}
            >
                <div className="border">
                    <input
                        type="text"
                        value="name"
                        placeholder="Write name here"
                        className="w-full h-12 px-5 py-3"
                    />
                </div>
                <div className="border">
                    <input
                        type="text"
                        value="email"
                        placeholder="Write email here"
                        className="w-full h-12 px-5 py-3"
                    />
                </div>
                <div className="border">
                    <input
                        type="text"
                        value="body"
                        placeholder="Write body here"
                        className="w-full h-12 px-5 py-3"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 hover:bg-black"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
