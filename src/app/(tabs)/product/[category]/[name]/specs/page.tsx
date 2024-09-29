import convertProductFaName from "@/src/utils/convertProductFaName";
import { Metadata } from "next";
import Container from "./_components/container/Container";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import SubHeader from "./_components/sub-header/SubHeader";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} مشخصات - Tech Shop`,
    };
}

const SpecsPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <SubHeader />
            <Container />
        </>
    );
};

export default SpecsPage;
