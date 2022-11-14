const postID = document.querySelector('input[name="postID"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('textarea[name="commentBody"]').value;

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postID,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
}

document
    .querySelector('.commentForm')
    .addEventListener('submit', commentFormHandler);
