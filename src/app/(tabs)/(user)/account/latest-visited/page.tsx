import { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "./_components/Header";
const List = dynamic(() => import("./_components/List"), { ssr: false });

export const metadata: Metadata = {
    title: "بازدیدهای اخیر - Tech Shop",
};

export default function LatestVisitedPage() {
    return (
        <>
            <Header />
            <List />
        </>
    );
}
