import { useContext } from "react";
import { Context } from "../../_Context";

const Mobile = () => {
    const { data, onChange } = useContext(Context);
    return (
        <div className="mt-4 lg:mt-6">
            <label
                className="block mb-1 mr-2 text-sm text-neutral-500 font-shabt"
                htmlFor="mobile"
            >
                شماره موبایل
            </label>
            <input
                type="text"
                id="mobile"
                name="mobile"
                inputMode="numeric"
                placeholder="شماره موبایل ..."
                className="w-full bg-second-theme p-5 rounded-2xl"
                value={data.mobile}
                onChange={onChange}
            />
        </div>
    );
};

export default Mobile;
