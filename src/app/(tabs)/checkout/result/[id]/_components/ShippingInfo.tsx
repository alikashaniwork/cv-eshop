import useFetchOrderDetails from "@/src/queries/order/useFetchOrderDetails";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useParams } from "next/navigation";

export default function ShippingInfo() {
    const { id } = useParams<{ id: string }>();

    const { data: order, isPending } = useFetchOrderDetails(id);

    if (!order) return null;

    const { shippingInfo } = order;

    return (
        <div className="bg-second-theme rounded-2xl p-4 mt-4">
            <p className="text-sm text-neutral-500 font-shabt">
                اطلاعات حمل و نقل
            </p>
            <div className="flex items-center justify-between pt-4">
                <p>{shippingInfo?.customer.fullName}</p>
                <p className="tracking-[3px]">
                    {convertEngToPer(shippingInfo?.customer.mobile)}
                </p>
            </div>
            <p className="pt-1">
                {shippingInfo?.address.state} - {shippingInfo?.address.city}
            </p>
            <p className="pt-1">{shippingInfo?.address.street}</p>
            <div className="pt-1 flex items-center gap-4">
                <p className="text-sm text-neutral-500 font-shabt">کد پستی</p>
                <p>{convertEngToPer(shippingInfo?.address.zipCode)}</p>
            </div>
            <p className="pt-1">{shippingInfo?.address.description}</p>
        </div>
    );
}
