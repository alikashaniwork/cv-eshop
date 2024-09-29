import { getSession } from "@/authentication";
import connectDB from "@/db";
import Question from "@/src/models/Question";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const questions = await Question.find({ user: user._id }).sort({
            createdAt: 1,
        });
        // .populate({
        //     path: "product",
        //     model: "Product",
        //     select: {
        //         "name.en": 1,
        //     },
        // });

        return NextResponse.json(questions, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
