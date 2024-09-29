import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const RatingContainer = () => {
    const { reviews, rating } = useContext(ProductContext);
    return (
        <div className="flex justify-between items-center px-4 py-2 rounded-xl bg-second-theme">
            <div className="h-7 flex items-center text-[.95rem] text-[#aaa] font-shabt">
                {reviews?.length === 0 ? (
                    <p className="text-[.8rem] text-[#888] font-shabt px-1">
                        بدون امتیاز
                    </p>
                ) : (
                    <p className="text-neutral-600">
                        {convertEngToPer(reviews?.length!)}{" "}
                        <span className="font-shabt text-sm text-neutral-500">
                            رای
                        </span>
                    </p>
                )}
            </div>
            <Rating
                readOnly
                name="rating"
                value={rating}
                precision={0.5}
                sx={{ gap: "2px", direction: "ltr", fontSize: "1.4rem" }}
                emptyIcon={
                    <StarRoundedIcon
                        style={{ opacity: 1, color: "#aaa" }}
                        fontSize="inherit"
                    />
                }
                icon={
                    <StarRoundedIcon
                        style={{ color: "gold" }}
                        fontSize="inherit"
                    />
                }
            />
        </div>
    );
};

export default RatingContainer;
