import { getSession } from "@/authentication";
import { Metadata } from "next";
import ContextProvider from "./_Context";
import LargeScreen from "./_components/_large/LargeScreen";
import SmallScreen from "./_components/_small/SmallScreen";
import Registration from "./_components/registration/Registration";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "ثبت سفارش - اطلاعات حمل و نقل",
    };
}

export default async function CheckoutShippingInfoPage() {
    const session = await getSession();
    return (
        <ContextProvider>
            {session ? (
                <>
                    <SmallScreen />
                    <LargeScreen />
                </>
            ) : (
                <Registration />
            )}
        </ContextProvider>
    );
}
