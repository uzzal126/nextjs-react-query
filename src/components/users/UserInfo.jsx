import useUserQuery from "../../hooks/query/useUserQuery";

const UserInfo = () => {
    const { isLoading, data } = useUserQuery();
    return (
        <div className="pt-10">
            <div className="container">
                <h2 className="text-2xl font-semibold mb-5 text-center">
                    User Information
                </h2>
                {isLoading ? (
                    <h2>User is loading...</h2>
                ) : (
                    <div className="grid grid-col-1">
                        <div className="border p-5">
                            <h4>Name: {data.name} </h4>
                            <h4>Email: {data.email}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserInfo;
