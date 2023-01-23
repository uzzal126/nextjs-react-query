import { useQuery } from "@tanstack/react-query";
import * as api from "../../api";

const usePostQuery = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: api.fetchPosts,
        staleTime: 1000 * 60 * 10,
    });
};

export default usePostQuery;
