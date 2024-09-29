import useVerify from "@/src/queries/user/login/useVerify";
import { useContext } from "react";
import { Context } from "../_Context";
import Container from "../Container";
import Actions from "./Actions";
import Input from "./Input";

const Verify = ({ onClose }: { onClose: () => void }) => {
    const { isSent } = useContext(Context);
    const verify = useVerify();
    const { error, reset } = verify;
    return (
        isSent && (
            <Container>
                <Actions reset={reset} />

                <Input verify={verify} onClose={onClose} />

                <p className="flex items-center text-[.8rem] text-red-500 font-shabt">
                    {error?.message}
                </p>
            </Container>
        )
    );
};

export default Verify;
