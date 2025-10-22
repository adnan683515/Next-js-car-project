"use server"

import { collectionsName, dbConnnection } from "@/app/lib/dbConnect"
import bcrypt from "bcrypt";

export const LoginUserCheck = async (payload) => {


    const { email, password } = payload;

    const db = await dbConnnection(collectionsName?.userCollections);
    const ckUser = await db.findOne({ email });


    if (ckUser) {
        const ckPass = await bcrypt.compare(password, ckUser?.password);
        if (ckPass) {
            console.log("successfully");
            return ckUser;
        }
    }

    return null;
};
