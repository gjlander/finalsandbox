import { Schema, model } from "mongoose";

const displaySchema = new Schema(
    {
        header: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

const DisplayModel = model("Display", displaySchema);

export default DisplayModel;
