import { asyncHandler } from '../utils/asyncHandler.js';
import { APIError } from '../utils/APIError.js'
import { User } from '../model/user.model.js';
import { Comment } from '../model/comment.model.js';
import { APIResponse } from '../utils/APIResponse.js';

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new APIError(500, "Something went wrong while generating tokens");
    }
};

const loginUser = asyncHandler(async (req, res) => {
    const { password } = req.body;

    if (!password) {
        throw new APIError(400, "Password is required");
    }

    // Find the single admin user
    const user = await User.findOne();

    if (!user) {
        throw new APIError(404, "No user account found. Run the seed script first.");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new APIError(401, "Invalid password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, { ...options, maxAge: 10 * 24 * 60 * 60 * 1000 })
        .json(new APIResponse(200, { user: loggedInUser }, "Login successful"));
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        { $unset: { refreshToken: 1 } },
        { new: true }
    );

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new APIResponse(200, {}, "Logged out successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new APIResponse(200, { user: req.user }, "User fetched successfully"));
});

const getAllComments = asyncHandler(async (req, res) => {
    const comments = await Comment.find().sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new APIResponse(200, comments, 'Comments fetched successfully'));
});

export { loginUser, logoutUser, getCurrentUser, getAllComments };
