const newFormHandler = async function (event) {
    event.preventDefault();
    const title = document.querySelector('input[name="postTitle"]').value;
    const content = document.querySelector('textarea[name="postBody"]').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/api/dashboard');
};

document
    .querySelector('#newPostForm')
    .addEventListener('submit', newFormHandler);