import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "پرسش‌های من - Tech Shop",
    };
}

export default function QuestionsPage() {
    return (
        <>
            <Small />
            <Large />
        </>
    );
}
