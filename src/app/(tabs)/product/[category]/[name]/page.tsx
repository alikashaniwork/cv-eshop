import convertProductFaName from "@/src/utils/convertProductFaName";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} - Tech Shop`,
    };
}

const ProductDetailsPage = () => {
    return (
        <>
            <Small />
            <Large />
        </>
    );
};

export default ProductDetailsPage;
