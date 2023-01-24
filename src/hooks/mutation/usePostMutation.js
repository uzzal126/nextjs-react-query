import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../../api";

const usePostMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.newPost,
        onSuccess: (post) => {
            queryClient.setQueryData(["posts"], (prevData) => {
                return [...prevData, post];
            });
        },
    });
};

export default usePostMutation;
