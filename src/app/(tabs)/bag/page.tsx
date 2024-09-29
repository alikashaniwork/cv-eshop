import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "سبد خرید - Tech Shop",
    };
}

export default function BagPage() {
    return (
        <>
            <Small />
            <Large />
        </>
    );
}
