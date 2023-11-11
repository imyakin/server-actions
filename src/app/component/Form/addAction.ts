"use server";
import { revalidatePath } from "next/cache";
import { getClient } from "@/app/client";

export const addAction = async (data: FormData) => {
    const newTask = data.get("title");
    if(!newTask){
        return;
    }
    const client = await getClient();
    await client.task.create({
        data: {
            title: newTask.toString(),  
        }
    });
    revalidatePath("/");
}