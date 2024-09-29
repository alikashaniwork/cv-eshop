import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export const metadata: Metadata = {
    title: "سفارش‌ها - Tech Shop",
};

export default function OrdersPage() {
    return (
        <>
            <Small />
            <Large />
        </>
    );
}
