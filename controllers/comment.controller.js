const CommentService = require("../services/comment.service");
const commentService = new CommentService();

class CommentController {
    async storeComment(req, res) {
        try {
            const comment = await commentService.store(req.body);
            res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'gagal menyimpan komentar' });
        }
    }

    async deleteComment(req, res) {
        const commentId = req.params.id;

        try {
            await commentService.deleteComment(commentId);

            res.status(200).json({ message: "Komentar berhasil dihapus." });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Gagal menghapus komentar." });
        }
    }
}

module.exports = CommentController;
