import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import * as api from "../../api";

const usePostQuery = () => {
    const router = useRouter();
    const { id } = router.query;

    return useQuery({
        queryKey: ["post", id],
        queryFn: () => api.fetchPost(id),
        enabled: Boolean(id),
        staleTime: 1000 * 60 * 10,
    });
};

export default usePostQuery;
