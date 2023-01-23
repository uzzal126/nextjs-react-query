import { useQuery } from "@tanstack/react-query";
import usePostQuery from "./usePostQuery";
import * as api from "../../api";

const useUserQuery = () => {
    const { data } = usePostQuery();
    return useQuery({
        queryKey: ["user", data?.userId],
        queryFn: () => api.fetchUser(data?.userId),
        enabled: Boolean(data?.userId),
        staleTime: 1000 * 60 * 10,
    });
};

export default useUserQuery;
