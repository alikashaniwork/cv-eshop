import CloseButton from "@/src/app/_components/_modules/close-button/CloseButton";
import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../../Item";

const Header = ({ onClose }: { onClose: () => void }) => {
    const { _id } = useContext(Context);
    const { data: replies } = useFetchReviewReplies(_id);
    return (
        <div className="sticky top-0 z-10 h-12 lg:h-16 flex items-center justify-between px-4 lg:px-6 bg-second-theme border-b border-[#f5f5f5]">
            <p className="text-neutral-600 justify-center">
                {replies?.length! > 0
                    ? `${convertEngToPer(replies?.length!)} پاسخ`
                    : "پاسخ‌ها"}
            </p>
            <CloseButton onClose={onClose} />
        </div>
    );
};

export default Header;
