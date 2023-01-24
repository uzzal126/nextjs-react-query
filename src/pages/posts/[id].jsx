import Head from "next/head";
import PostDetailsContent from "../../components/posts/PostDetailsContent";
import CommentsList from "../../components/posts/CommentsList";
import UserInfo from "../../components/users/UserInfo";

import usePostQuery from "../../hooks/query/usePostQuery";

const Home = () => {
    const { data } = usePostQuery();
    return (
        <>
            <Head>
                <title>{data?.title}</title>
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
