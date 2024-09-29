import { PropsWithChildren } from "react";
import CompleteRegister from "./_components/complete-register/CompleteRegister";
import Sidebar from "./_components/sidebar/Sidebar";
import { getSession } from "@/authentication";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: PropsWithChildren) {
    const session = await getSession();
    if (!session) redirect("/signin");
    return (
        <div className="flex lg:gap-2 lg:pt-14 lg:p-2 overflow-x-hidden">
            <Sidebar />
            <div className="w-full">{children}</div>
            <CompleteRegister />
        </div>
    );
}
