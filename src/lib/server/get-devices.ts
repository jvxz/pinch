'use server'
import { z } from "zod";
import { headers } from 'next/headers';

const devicesSchema = z.array(z.object({
    model: z.string(),
    physicalWidth: z.number(),
    physicalHeight: z.number(),
    logicalWidth: z.number(),
    logicalHeight: z.number(),
}))

async function getBaseUrl() {
    const headersList = await headers();
    const host = headersList.get('host') ?? 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    return `${protocol}://${host}`;
}

export async function getAppleDevices() {
    const baseUrl = await getBaseUrl();
    const res = await fetch(`${baseUrl}/api/apple`);
    const data: unknown = await res.json();
    const parsedData = devicesSchema.parse(data);
    return parsedData;
}

export async function getAndroidDevices() {
    const baseUrl = await getBaseUrl();
    const res = await fetch(`${baseUrl}/api/android`);
    const data: unknown = await res.json();
    const parsedData = devicesSchema.parse(data);
    return parsedData;
}