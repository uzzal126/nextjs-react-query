import { useState } from "react";

const EditForm = () => {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const postSubmitHandler = (e) => {
        e.preventDefault();
        setPost({ title: "", body: "" });
    };

    return (
        <div className="post-form">
            <div className="container">
                <div className="grid grid-col-1">
                    <form
                        className="border p-5 mb-5 space-y-5"
                        onSubmit={postSubmitHandler}
                    >
                        <div className="border">
                            <input
                                type="text"
                                placeholder="Write title"
                                className="w-full h-12 px-5 py-3"
                                value={post.title}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="border">
                            <input
                                type="text"
                                placeholder="Write body"
                                className="w-full h-12 px-5 py-3"
                                value={post.body}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        body: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary rounded-md text-white px-8 py-2.5 hover:bg-black"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditForm;
