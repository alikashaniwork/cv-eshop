import { Metadata } from "next";
import Body from "./_components/body/Body";
import Footer from "./_components/footer/Footer";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import ContextProvider from "./_Context";
import convertProductFaName from "@/src/utils/convertProductFaName";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} خرید - Tech Shop`,
    };
}

const BuyPage = () => {
    return (
        <ContextProvider>
            <Header />
            <Navigation />
            <Body />
            <Footer />
        </ContextProvider>
    );
};

export default BuyPage;
