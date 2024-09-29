import { Metadata } from "next";
import Categories from "./_components/Categories";
import Header from "./_components/Header";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "دسته‌بندی‌ها - Tech Shop",
    };
}

const CategoriesPage = () => {
    return (
        <>
            <Header />
            <Categories />
        </>
    );
};

export default CategoriesPage;
