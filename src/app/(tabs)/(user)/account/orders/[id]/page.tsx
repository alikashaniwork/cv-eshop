import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import ContextProvider from "./_Context";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "جزییات سفارش - Tech Shop",
    };
}

export default function OrderDetailsPage() {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
}
