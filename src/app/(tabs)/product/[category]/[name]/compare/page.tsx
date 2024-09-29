import { Metadata } from "next";
import ContextProvider from "./_Context";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import convertProductFaName from "@/src/utils/convertProductFaName";

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}): Promise<Metadata> {
    const decodedName = decodeURIComponent(params.name);
    return {
        title: `${convertProductFaName(decodedName)} مقایسه - Tech Shop`,
    };
}

const ComparePage = () => {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
};

export default ComparePage;
