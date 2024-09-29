"use client";
import Submit from "./Submit";

const Header = () => {
    return (
        <div className="h-20 sticky top-12 left-0 z-10 flex items-center justify-between bg-[#fff5] backdrop-blur-xl border-b border-neutral-100 px-[5%] lg:px-[8%]">
            <div>
                <p className="text text-neutral-500">تسویه حساب</p>
                <p className="text-lg text-neutral-600 mt-[2px]">
                    اطلاعات حمل و نقل
                </p>
            </div>
            <Submit />
        </div>
    );
};

export default Header;
