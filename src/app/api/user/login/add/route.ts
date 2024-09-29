import { encrypt } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { addMonths } from "date-fns";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const mobileRegex = /^(\+98|0)?9\d{9}$/;

type PersianToEnglishMap = {
    [key: string]: string;
};
const convertMobileNumber = (value: string): string => {
    const persianToEnglishMap: PersianToEnglishMap = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    };

    return value.replace(/./g, (num) => persianToEnglishMap[num] || num);
};

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { mobile }: { mobile: string } = await request.json();

        const convertedMobileNumber = convertMobileNumber(mobile);

        if (!mobileRegex.test(convertedMobileNumber))
            return NextResponse.json("شماره موبایل نامعبتر است!", {
                status: 400,
            });

        const user = await User.findOne({
            mobile: convertedMobileNumber,
        });

        if (!user) {
            const createdUser = await User.create({
                mobile: convertedMobileNumber,
            });

            const currentDate = new Date();

            const expires = addMonths(currentDate, 1);

            const session = await encrypt({
                userId: String(createdUser._id),
                expires,
            });

            cookies().set("session", session, { expires, httpOnly: true });

            return NextResponse.json("انجام شد", { status: 201 });
        } else {
            const currentDate = new Date();

            const expires = addMonths(currentDate, 1);

            const session = await encrypt({
                userId: String(user._id),
                expires,
            });

            cookies().set("session", session, { expires, httpOnly: true });

            return NextResponse.json("انجام شد", { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
