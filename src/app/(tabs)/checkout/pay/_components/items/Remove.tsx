import useBagStore from "@/src/queries/order/bag/store";
import Image from "next/image";
import { useContext, useState } from "react";
import { Context } from "./Item";
import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";

const Remove = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const item = useContext(Context);
    const items = useBagStore((s) => s.items);
    const remove = useBagStore((s) => s.setRemoveItem);
    return (
        <>
            <button
                className="w-[30px] h-[30px] absolute top-2 right-2 rounded-full bg-slate-100"
                onClick={() => {
                    if (items.length === 1) {
                        handleOpen();
                    } else {
                        remove(item);
                    }
                }}
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/trash/red.png"
                    alt=""
                    className=""
                />
            </button>
            <Backdrop isOpen={isOpen} onClose={handleOpen}>
                <div className="p-6 pb-5">
                    <p className="text-white text-sm">
                        حداقل ۱ محصول باید در سبد خرید موجود باشد
                    </p>
                    <button
                        className="mt-6 mx-auto text-sm"
                        onClick={handleOpen}
                    >
                        متوجه شدم
                    </button>
                </div>
            </Backdrop>
        </>
    );
};

export default Remove;
