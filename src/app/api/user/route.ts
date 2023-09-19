import { NextResponse } from "next/server";

export function GET() {
    const rest= {
        "user": "Sergio"
    }

    return NextResponse.json(rest)
}