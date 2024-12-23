'use server'
import { z } from "zod";

const devicesSchema = z.array(z.object({
    model: z.string(),
    physicalWidth: z.number(),
    physicalHeight: z.number(),
    logicalWidth: z.number(),
    logicalHeight: z.number(),
}))

export async function getAppleDevices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/apple`);
    const data: unknown = await res.json();
    const parsedData = devicesSchema.parse(data);
    return parsedData;
}

export async function getAndroidDevices() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/android`);
    const data: unknown = await res.json();
    const parsedData = devicesSchema.parse(data);
    return parsedData;
}