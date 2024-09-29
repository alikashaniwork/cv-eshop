const DiscountPrice = ({
    price,
    discount,
}: {
    price: number;
    discount: number | null | undefined;
}) => {
    if (!discount) return null;
    const discountedPrice = price - (discount / 100) * price;
    return (
        <div className="flex items-center gap-1">
            <p className="tracking-[1px] text-xl text-neutral-600 pt-1">
                {discountedPrice.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-neutral-400 font-shabt pt-[3px]">
                تومان
            </p>
        </div>
    );
};

export default DiscountPrice;
