import devices from "./apple-devices.json";
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json(devices)
}