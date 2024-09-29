import { getSession } from "@/authentication";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import LargeScreen from "./_components/_large/LargeScreen";
import SmallScreen from "./_components/_small/SmallScreen";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "ثبت سفارش - بررسی و پرداخت",
    };
}

export default async function CheckoutPayPage() {
    const session = await getSession();
    if (!session) return redirect("/signin?lastPath=/checkout/pay");
    return (
        <>
            <SmallScreen />
            <LargeScreen />
        </>
    );
}
