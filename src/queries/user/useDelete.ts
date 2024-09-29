import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeleteAccount = () => {
    const { replace } = useRouter();
    const queryClient = useQueryClient();
    const apiClient = new APIClient<unknown, string>("user/delete");
    const deleteAccount = useMutation({
        mutationFn: () => apiClient.delete(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-details"] });
            queryClient.clear();
            replace("/");
        },
    });
    return deleteAccount;
};

export default useDeleteAccount;
