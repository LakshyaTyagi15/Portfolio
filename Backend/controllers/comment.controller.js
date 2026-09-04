import { asyncHandler } from '../utils/asyncHandler.js';
import { APIError } from '../utils/APIError.js';
import { Comment } from '../model/comment.model.js';
import { APIResponse } from '../utils/APIResponse.js';

const createComment = asyncHandler(async (req, res) => {
    const { name, email, content } = req.body;

    if (!name?.trim()) {
        throw new APIError(400, "Name is required");
    }
    if (!email?.trim()) {
        throw new APIError(400, "Email is required");
    }
    if (!content?.trim()) {
        throw new APIError(400, "Message content is required");
    }

    const comment = await Comment.create({
        name: name.trim(),
        email: email.trim(),
        content: content.trim(),
    });

    return res
        .status(201)
        .json(new APIResponse(201, comment, "Message sent successfully"));
});

const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const comment = await Comment.findById(id);

    if (!comment) {
        throw new APIError(404, "Comment not found");
    }

    await Comment.findByIdAndDelete(id);

    return res
        .status(200)
        .json(new APIResponse(200, {}, "Comment deleted successfully"));
});

export { createComment, deleteComment };
