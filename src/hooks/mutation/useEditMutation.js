import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../../api";

const useEditMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: api.editPost,
        onSuccess: (res, postId) => {
            // console.log("i am from on success", postId);
            queryClient.setQueryData(["posts", postId], (prevData) => {
                // console.log("prevData", prevData[0]);
                return prevData;
            });
        },
    });
};

export default useEditMutation;
