import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "../model/user.model.js";
import { DB_NAME } from "../constants.js";

dotenv.config({ path: "./.env" });

const seedAdmin = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");

        // Check if user already exists
        const existingUser = await User.findOne();
        if (existingUser) {
            console.log("Admin user already exists:");
            console.log(`  Username: ${existingUser.userName}`);
            console.log(`  Email: ${existingUser.email}`);
            console.log(`  Name: ${existingUser.fullName}`);
            console.log("\nNo changes made. To reset, delete the user from MongoDB first.");
            process.exit(0);
        }

        const admin = await User.create({
            userName: "lakshya",
            email: process.env.ADMIN_EMAIL,
            fullName: "Lakshya Tyagi",
            password: process.env.ADMIN_PASSWORD,
        });

        console.log("Admin user created successfully!");
        console.log(`  Username: ${admin.userName}`);
        console.log(`  Email: ${admin.email}`);
        console.log(`  Name: ${admin.fullName}`);
        console.log(`  Password: ${process.env.ADMIN_PASSWORD}`);
    } catch (error) {
        console.error("Error seeding admin user:", error.message);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
};

seedAdmin();
