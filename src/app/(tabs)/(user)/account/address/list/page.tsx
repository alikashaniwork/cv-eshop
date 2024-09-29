import { Metadata } from "next";
import Header from "./_components/header/Header";
import List from "./_components/list/List";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "آدرس‌های ذخیره شده - Tech Shop",
    };
}

const AddressesPage = () => {
    return (
        <>
            <Header />
            <List />
        </>
    );
};

export default AddressesPage;
