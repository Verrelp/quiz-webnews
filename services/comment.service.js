const {  comments } = require('../models');

class CommentService {
    constructor() {
        this.commentModel = comments
    }
    async store(payload) {
        const { name, comment, news_id} = payload;
        const date = new Date();

        const commentNew = this.commentModel.create({
            name, comment, news_id,
            createdAt :date, updatedAt: date
        });
        return commentNew;
    }
}

module.exports = CommentService;