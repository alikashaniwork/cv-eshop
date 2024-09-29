import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "دیدگاه‌های من - Tech Shop",
    };
}

export default function ReviewsPage() {
    return (
        <>
            <Small />
            <Large />
        </>
    );
}
