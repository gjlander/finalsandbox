import { Schema, model } from "mongoose";
const clerkUserSchema = new Schema(
    {
        clerkUserId: { type: String, unique: true, required: true },
        firstName: String,
        lastName: String,
    },
    { timestamps: true }
);

const ClerkUserModel = model("ClerkUser", clerkUserSchema);

export default ClerkUserModel;
