const Message = () => {
    return (
        <div className="lg:mt-12 py-8 flex flex-col items-center gap-3 bg-second-theme border-y border-neutral-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#00d166"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
            >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p className="text-slate-700">پرداخت انجام شد</p>
        </div>
    );
};

export default Message;
