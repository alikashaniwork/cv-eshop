import { Login } from "@/src/queries/user/Entities";
import { CircularProgress } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { FormEvent } from "react";
import Container from "./Container";

interface Props {
    mobile: string;
    onChange: (e: FormEvent) => void;
    register: UseMutationResult<string, Error, Login, unknown>;
}

const Add = ({ mobile, onChange, register }: Props) => {
    const { error, isPending } = register;
    return (
        <Container>
            <>
                <p className="text-neutral-600 text-[.95rem]">
                    لطفا شماره موبایل‌تان را وارد کنید
                </p>
                <p className="h-7 flex items-center text-sm text-[#888] font-shabt">
                    مثال: ۰۹۲۳۲۳۲۳۴۲
                </p>
            </>
            {error?.message}
            <input
                style={{ textAlignLast: "center" }}
                className={`w-full h-full bg-white rounded-xl px-6 text-center text-neutral-600 shadow-sm shadow-[#ddda] border bg-[unset] text-2xl font-shabb tracking-[4px] pt-[6px] focus:border-blue-600 transition duration-500 placeholder:tracking-[0] placeholder:font-shabt placeholder:text-[.95rem] focus:border-blue
                ${error?.message ? "border-rose-600" : " border-neutral-200"}
                `}
                id="mobile"
                type="text"
                inputMode="numeric"
                placeholder="مثال: ۰۹۹۰۱۲۳۴۵۶۷"
                value={mobile}
                onChange={onChange}
            />
            <button
                className="w-full h-[80%] gap-2 bg-blue text-white font-shab rounded-xl text-[.95rem] disabled:bg-[#ddda]"
                onClick={() => register.mutate({ mobile })}
                disabled={isPending || !mobile}
            >
                {isPending && (
                    <CircularProgress size={15} sx={{ color: "#088e0" }} />
                )}
                دریافت کد تایید
            </button>
        </Container>
    );
};

export default Add;
