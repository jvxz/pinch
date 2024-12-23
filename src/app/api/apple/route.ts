import devices from "./apple-devices.json";
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json(devices)
}