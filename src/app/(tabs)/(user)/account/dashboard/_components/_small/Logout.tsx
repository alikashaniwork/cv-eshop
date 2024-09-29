import useLogout from "@/src/queries/user/useLogout";
import { CircularProgress } from "@mui/material";

const Logout = () => {
    const { mutate: logout, isPending } = useLogout();
    return (
        <button
            className="gap-2 bg-second-theme rounded-2xl h-12 text-[.92rem] text-neutral-600"
            onClick={() => logout()}
            disabled={isPending}
        >
            {isPending && <CircularProgress size={14} sx={{ color: "#aaa" }} />}
            خروج
        </button>
    );
};

export default Logout;
