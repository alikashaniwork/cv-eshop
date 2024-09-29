import Container from "../Container";
import Footer from "./Footer";
import Input from "./Input";
import Submit from "./Submit";

const Add = () => {
    return (
        <Container>
            <p className="text-neutral-500 text-sm mb-[2px] mr-[2px]">
                شماره موبایل‌تان را وارد کنید
            </p>

            <div className="w-full relative flex items-center">
                <Input />
                <Submit />
            </div>

            <Footer />
        </Container>
    );
};

export default Add;
