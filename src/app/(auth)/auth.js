"use server"

import { collectionsName, dbConnnection } from "../lib/dbConnect"
import bcrypt from "bcrypt";


export const Regsiteruser = async (payload) => {

    const dbcnt = await dbConnnection(collectionsName.userCollections)

    const ckuser = await dbcnt.findOne({ email: payload?.email })
    if (ckuser) {
        return { status: 409, message: `${payload?.email} This email is already exits` }
    }

    if (!payload?.password) {
        throw new Error("Password is missing!");
    }
    const hashPass = await bcrypt.hash(payload?.password, 10);

    payload.password = hashPass

    const result = await dbcnt.insertOne(payload)

    if (result.insertedId) {
        return { status: 201, message: 'registation Successfully!' }
    }
}