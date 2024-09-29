import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Header from "./Header";
import List from "./List";
import Footer from "./footer/Footer";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    return (
        <Backdrop isOpen={isOpen} onClose={onClose}>
            <div className="w-full md:w-[500px] max-h-[calc(100vh-95px)] overflow-y-auto">
                <Header onClose={onClose} />
                <List />
                <Footer onClose={onClose} />
            </div>
        </Backdrop>
    );
};

export default Container;
