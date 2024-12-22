'use server'
import { z } from "zod";
import { promises as fs } from 'fs';

const devicesSchema = z.array(z.object({
    model: z.string(),
    physicalWidth: z.number(),
    physicalHeight: z.number(),
    logicalWidth: z.number(),
    logicalHeight: z.number(),
}))

// export async function getDevices(type: "apple" | "android") {
//     const devices = await fetch(`/api/${type}/devices.json`)
//     const data = devicesSchema.parse(await devices.json())

//     return data;
// }

export async function getDevices(type: "apple" | "android") {
    const file = await fs.readFile(process.cwd() + `/src/app/${type}-devices.json`, 'utf8');
    const data = devicesSchema.parse(JSON.parse(file));
    return data;
}
