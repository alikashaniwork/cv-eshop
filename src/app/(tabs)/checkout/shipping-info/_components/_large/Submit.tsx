import useBagStore from "@/src/queries/order/bag/store";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../_Context";

export default function Submit() {
    const router = useRouter();

    const [errors, setErrors] = useState({
        location: true,
        customer: true,
    });

    const { data } = useContext(Context);

    const setShippingInfo = useBagStore((s) => s.setShippingInfo);
    const shippingInfo = useBagStore((s) => s.shippingInfo);

    useEffect(() => {
        const isLocationError =
            !data.city || !data.state || !data.street || !data.zipCode;
        const isCustomerError = !data.fullName || !data.mobile;

        setErrors({
            location: isLocationError,
            customer: isCustomerError,
        });
    }, [data]);

    const handleSubmit = () => {
        setShippingInfo(data);
        router.push("pay");
    };
    return (
        <button
            className="bg-blue rounded-2xl p-2 px-6 text-[.95rem] text-white disabled:bg-neutral-200 text-sm"
            onClick={handleSubmit}
            disabled={errors.customer || errors.location}
        >
            {errors.location
                ? "اطلاعات محل تحویل را وارد کنید"
                : errors.customer
                ? "اطلاعات تحویل گیرنده را وارد کنید"
                : "ثبت و ادامه"}
        </button>
    );
}
