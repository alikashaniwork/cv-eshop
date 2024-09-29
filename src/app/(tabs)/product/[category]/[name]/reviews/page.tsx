import { Metadata } from "next";
import Header from "./_components/header/Header";
import List from "./_components/list/List";
import Navigation from "./_components/Navigation";
import SubHeader from "./_components/sub-header/SubHeader";
import convertProductFaName from "@/src/utils/convertProductFaName";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} دیدگاه‌های - Tech Shop`,
    };
}

const ReviewsPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <SubHeader />
            <List />
        </>
    );
};

export default ReviewsPage;
