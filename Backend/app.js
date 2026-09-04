import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.COR_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// --- Routes ---
import userRoutes from './routes/user.routes.js';
import commentRoutes from './routes/comment.routes.js';

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/comments', commentRoutes);

// --- Error handler ---
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
});

export {app};