import convertProductFaName from "@/src/utils/convertProductFaName";
import { Metadata } from "next";
import Header from "./_components/Header";
import List from "./_components/list/List";
import Navigation from "./_components/Navigation";
import SubHeader from "./_components/sub-header/SubHeader";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} پرسش‌های - Tech Shop`,
    };
}

const QuestionsPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <SubHeader />
            <List />
        </>
    );
};

export default QuestionsPage;
