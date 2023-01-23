import Head from "next/head";
import PostDetailsContent from "../../components/posts/PostDetailsContent";
import CommentsList from "../../components/posts/CommentsList";
import UserInfo from "../../components/users/UserInfo";

const Home = () => {
    return (
        <>
            <Head>
                <title>details page</title>
            </Head>
            <div className="pb-20">
                <div className="container">
                    <PostDetailsContent />
                    <UserInfo />
                    <CommentsList />
                </div>
            </div>
        </>
    );
};

export default Home;
