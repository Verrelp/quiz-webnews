$("#comment-form").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const commentText = $("#comment").val();
    const newsId = $("#newsId").val();
    
    // Check if name and comment are not empty
    if (!name || !commentText) {
        alert("Nama dan komentar harus diisi.");
        return;
    }

    $.ajax({
        url: "/api/v1/comments",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ name, comment: commentText, news_id: newsId }),
        success: function(response) {
            alert("Komentar berhasil ditambah.");
            window.location.href = "/news/" + newsId;
        },
        error: function(error) {
            console.error("Terjadi kesalahan: " + JSON.stringify(error));
            alert("Gagal menyimpan komentar.");
        }
    });

    // Clear input fields after submission
    $("#name").val("");
    $("#comment").val("");
});

function deleteComment(commentId) {
    $.ajax({
        url: `/api/v1/comments/${commentId}`,
        type: "DELETE",
        success: function(response) {
            console.log("Komentar berhasil dihapus:", response);
        },
        error: function(error) {
            console.error("Terjadi kesalahan saat menghapus komentar:", error);
        }
    });
}

deleteComment(123);
