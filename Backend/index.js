import express from "express";
import cors from "cors";
import "./db/mongooseClient.js";
import pokemonRouter from "./routes/pokemonRoutes.js";
import userRouter from "./routes/userRoutes.js";
// import authRouter from "./routes/authRoutes.js";
import displayRouter from "./routes/displayRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import ClerkUserModel from "./models/clerkUserModel.js";

//clerk webhook stuff
import { Webhook } from "svix";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 7000;
app.use(cors({ exposedHeaders: "Authorization" }));

app.use(express.json());

app.get("/", (req, res) =>
    res.send(
        '<p>Welcome to the PokeFight API! Go to <a href="/pokemon">/pokemon</a> to see cool things happening</p>'
    )
);
app.post(
    "/api/webhook",
    bodyParser.raw({ type: "application/json" }),
    async function (req, res) {
        try {
            // Check if the 'Signing Secret' from the Clerk Dashboard was correctly provided
            const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
            if (!WEBHOOK_SECRET) {
                throw new Error("You need a WEBHOOK_SECRET in your .env");
            }
            const payloadString = req.body.toString();
            const svixHeaders = req.headers;
            if (!svixHeaders) {
                return new Response("Error occured -- no svix headers", {
                    status: 400,
                });
            }

            const wh = new Webhook(WEBHOOK_SECRET);
            const evt = wh.verify(payloadString, svixHeaders);
            const { id, ...attributes } = evt.data;
            // Handle the webhooks
            const eventType = evt.type;
            if (eventType === "user.created") {
                console.log(`User ${id} was ${eventType}`);

                const firstName = attributes.first_name;
                const lastName = attributes.last_name;

                const user = new ClerkUserModel({
                    clerkUserId: id,
                    firstName: firstName,
                    lastName: lastName,
                });

                await user.save();
                console.log("User saved to database");
            }
            res.status(200).json({
                success: true,
                message: "Webhook received",
            });
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message,
            });
        }
    }
);

app.use("/pokemon", pokemonRouter);

app.use("/users", userRouter);

// app.use("/auth", authRouter);

app.use("/display", displayRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Welcome ${port}`));
