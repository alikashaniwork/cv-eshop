"use client";
import ContextProvider from "./_Context";
import Add from "./add/Add";

const Form = ({ onClose }: { onClose: () => void }) => {
    return (
        <ContextProvider>
            <Add />
            {/* <Verify onClose={onClose} /> */}
        </ContextProvider>
    );
};

export default Form;
