import APIClient from "@/src/queries/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useFetchUserDetails from "../user/profile/useFetchDetails";
import { Review } from "./Entities";

export default function useLikeReview(reviewId: string, productId: string) {
    const queryClient = useQueryClient();
    const { data: user } = useFetchUserDetails();
    const apiClient = new APIClient<unknown, string>("review/like");

    return useMutation({
        mutationFn: () => apiClient.patch({}, { params: { reviewId } }),

        // ذخیره‌سازی داده‌های قبلی در کش قبل از mutation
        onMutate: async () => {
            await queryClient.cancelQueries({
                queryKey: ["reviews", productId],
            });

            // گرفتن داده‌های قبلی
            const previousReviews = queryClient.getQueryData<Review[]>([
                "reviews",
                productId,
            ]);

            // آپدیت خوشبینانه داده‌ها
            if (previousReviews) {
                queryClient.setQueryData(
                    ["reviews", productId],
                    (oldData: Review[] | undefined) => {
                        return oldData?.map((review) =>
                            review._id === reviewId
                                ? {
                                      ...review,
                                      likes: review.likes.includes(user?._id!)
                                          ? review.likes.filter(
                                                (u) => u !== user?._id
                                            )
                                          : [user?._id, ...review.likes],
                                  }
                                : review
                        );
                    }
                );
            }

            // بازگرداندن داده‌های قبلی در context
            return { previousReviews };
        },

        // در صورت بروز خطا، بازگرداندن داده‌ها به حالت قبلی
        onError: (error, variables, context) => {
            if (context?.previousReviews) {
                queryClient.setQueryData(
                    ["reviews", productId],
                    context.previousReviews
                );
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
        },
    });
}
