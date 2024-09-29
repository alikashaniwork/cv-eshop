import { Metadata } from "next";
import Large from "./_components/_large/Large";
import SmallScreen from "./_components/_small/Small";

export const metadata: Metadata = {
    title: "حساب کاربری - Tech Shop",
};

export default function DashboardPage() {
    return (
        <>
            <SmallScreen />
            <Large />
        </>
    );
}
