import { getSession } from "@/authentication";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Body from "./_components/Body";
import Message from "./_components/Message";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "ثبت سفارش - پرداخت موفق",
    };
}

export default async function CheckoutResultPage() {
    const session = await getSession();
    if (!session) return redirect("/signin?lastPath=/checkout/pay");
    return (
        <>
            <Message />
            <Body />
        </>
    );
}
