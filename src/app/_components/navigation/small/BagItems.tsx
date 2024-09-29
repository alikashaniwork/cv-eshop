import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const BagItems = ({ items, href }: { href: string; items: number }) => {
    return (
        items > 0 &&
        href === "/bag" && (
            <p className="w-[18px] h-[18px] absolute -left-[2px] -bottom-[3px] flex items-center justify-center bg-[#777] pt-[2px] text-white rounded-full text-[.9rem]">
                {convertEngToPer(items)}
            </p>
        )
    );
};

export default BagItems;
