"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../_Context";

const Header = () => {
    const { status } = useContext(Context);
    const statusColor =
        status === "فعال"
            ? "bg-amber-400"
            : status === "تحویل شده"
            ? "bg-green-500"
            : status === "لغو شده"
            ? "bg-rose-500"
            : "bg-orange-600";
    return (
        <header className="fixed top-0 left-0 w-full h-12 flex items-center justify-between px-4 bg-[#f5f5f555] backdrop-blur-xl border-b border-neutral-100 *:flex *:items-center *:flex-1">
            <div>
                <Link href="/account/orders" className="text-sm font-shabt">
                    <Image
                        width={20}
                        height={20}
                        src="/icons/arrow/right-b.png"
                        alt=""
                        priority
                    />
                    سفارشات
                </Link>
            </div>
            <p className="justify-center text-[.95rem] text-neutral-700">
                جزییات نوبت
            </p>
            <div className="justify-end">
                <p
                    className={`${statusColor} bg- text-[.85rem] text-white p-1 px-3 rounded-2xl`}
                >
                    {status}
                </p>
            </div>
        </header>
    );
};

export default Header;
