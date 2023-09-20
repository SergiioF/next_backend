import { NextResponse } from "next/server";

export function GET() {
    const rest= {
        "user": "Moonshot"
    }

    return NextResponse.json(rest)
}