import { Login } from "@/src/queries/user/Entities";
import { convertEngToPerDigits } from "@/src/utils/convertNumberTypes";
import { CircularProgress } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import {
    ClipboardEvent,
    KeyboardEvent,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { Context } from "../_Context";

interface Props {
    onClose: () => void;
    verify: UseMutationResult<string, Error, Login, unknown>;
}

const Input = ({ verify, onClose }: Props) => {
    const { mobile } = useContext(Context);

    const ref = useRef<any[]>([]);

    const [otp, setOtp] = useState(["", "", "", ""]);

    useEffect(() => {
        let isEmpty = true;
        for (let i = 0; i < otp.length; i++) {
            isEmpty = otp[i] !== "" ? false : true;
        }
        const updatedOTP = [...otp];
        if (!isEmpty) {
            verify.mutate(
                {
                    mobile,
                    otp: updatedOTP.join(""),
                },
                { onSuccess: () => onClose() }
            );
        }
    }, [otp, mobile]);

    useEffect(() => {
        ref.current && ref.current[0].focus();
    }, []);

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...otp];
        updatedCode[index] = convertEngToPerDigits(value);
        setOtp(updatedCode);
        index < 3 && value !== "" && ref.current[index + 1].focus();
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData("text/plain");
        const updatedOTP = [...otp];
        if (pastedData) {
            for (let i = 0; i < pastedData.length; i++) {
                updatedOTP[i] = convertEngToPerDigits(pastedData[i]);
            }
            setOtp(updatedOTP);
            verify.mutate(
                {
                    mobile,
                    otp: updatedOTP.join(""),
                },
                { onSuccess: () => onClose() }
            );
            ref.current[3]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        event.key === "Backspace" &&
            index > 0 &&
            otp[index] === "" &&
            ref.current[index - 1].focus();
    };

    return (
        <div
            style={{ direction: "ltr" }}
            className="flex items-center justify-between gap-4"
        >
            {verify.isPending ? (
                <div className="w-full h-[60px] flex items-center justify-center">
                    <CircularProgress size={15} />
                </div>
            ) : (
                otp.map((code, index) => (
                    <input
                        style={{ textAlignLast: "center" }}
                        ref={(inputRef: any) =>
                            (ref.current[index] = inputRef!)
                        }
                        className="w-[60px] h-[60px] bg-slate-700 border border-slate-600 focus:border-blue-600 text-center text-3xl text-gray-800 pt-1 transition duration-200"
                        key={index}
                        id="otpCode"
                        type="text"
                        inputMode="numeric"
                        max={1}
                        autoComplete="one-time-code"
                        value={code}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={(e) => handlePaste(e)}
                    />
                ))
            )}
        </div>
    );
};

export default Input;
