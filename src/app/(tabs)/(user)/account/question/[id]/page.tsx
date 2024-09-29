import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import ContextProvider from "./_Context";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "جزییات پرسش - Tech Shop",
    };
}

export default function QuestionDetailsPage() {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
}
