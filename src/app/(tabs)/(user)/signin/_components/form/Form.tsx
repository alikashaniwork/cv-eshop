"use client";
import ContextProvider from "./_Context";
import Add from "./add/Add";

const Form = () => {
    return (
        <ContextProvider>
            <Add />
        </ContextProvider>
    );
};

export default Form;
