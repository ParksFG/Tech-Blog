const postID = document.querySelector('input[name="postID"]').value;


const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="postTitle"]').value;
    const content = document.querySelector('textarea[name="postBody"]').value;
    const response = await fetch(`/api/post/${postID}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/api/dashboard');
    } else {
        alert('Failed to update your post');
    }
    document.location.replace('/api/dashboard');
};

const deleteClickHandler = async () => {
    await fetch(`/api/post/${postID}`, {
        method: 'DELETE'
    });

    document.location.replace('/api/dashboard');
};
document
    .querySelector('#deleteBtn')
    .addEventListener('click', deleteClickHandler);

document
    .querySelector('.editPostForm')
    .addEventListener('submit', editFormHandler);
