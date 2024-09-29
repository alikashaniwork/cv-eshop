import convertCategory from "@/src/utils/convertCategory";
import type { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

type Props = {
    params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const category = params.category;
    return {
        title: `${convertCategory(category)} - Tech Shop`,
        description: `فروش محصولات ${convertCategory(category)}`,
    };
}

const ProductsPage = () => {
    return (
        <>
            <Small />
            <Large />
        </>
    );
};

export default ProductsPage;
