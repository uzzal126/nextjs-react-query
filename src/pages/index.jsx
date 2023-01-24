import Head from "next/head";
import PostsWrapper from "../components/posts/PostsWrapper";
import PostForm from "../components/posts/PostForm";
import EditForm from "../components/posts/EditForm";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PostForm />
            <EditForm />
            <PostsWrapper />
        </>
    );
};

export default Home;
