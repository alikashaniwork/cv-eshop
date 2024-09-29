import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "ویرایش آدرس - Tech Shop",
    };
}

const EditAddressPage = () => {
    return (
        <>
            <Small />
            <Large />
        </>
    );
};

export default EditAddressPage;
