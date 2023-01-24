import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../../api";

const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.deletePost,
        onSuccess: (res, postId) => {
            queryClient.setQueryData(["posts"], (prevData) => {
                return prevData.filter((post) => post.id !== postId);
            });
        },
    });
};

export default useDeleteMutation;
