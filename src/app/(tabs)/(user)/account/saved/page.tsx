import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export const metadata: Metadata = {
    title: "ذخیره شده‌ها - Tech Shop",
};

export default function SavedPage() {
    return (
        <>
            <Small />
            <Large />
        </>
    );
}
