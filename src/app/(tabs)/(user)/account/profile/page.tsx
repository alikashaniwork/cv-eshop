import { Metadata } from "next";
import Body from "./_components/Body";
import Header from "./_components/Header";

export const metadata: Metadata = {
    title: "اطلاعات کاربری - Tech Shop",
};

export default function ProfilePage() {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}
