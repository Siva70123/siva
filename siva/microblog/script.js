document.getElementById('post-btn').addEventListener('click', function() {
    const postInput = document.getElementById('post-input');
    const postContent = postInput.value.trim();
    const imageInput = document.getElementById('image-input');
    const imageFile = imageInput.files[0];

    if (postContent || imageFile) {
        const postsContainer = document.getElementById('posts-container');

        // Create a new post element
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // Get current timestamp
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString();

        // Add text content and timestamp
        postElement.innerHTML = `
            <p>${postContent}</p>
            <div class="timestamp">${formattedTime}</div>
        `;

        // If an image is uploaded, display it
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                postElement.appendChild(imgElement);
            };
            reader.readAsDataURL(imageFile);
        }

        // Add the new post at the top
        postsContainer.insertBefore(postElement, postsContainer.firstChild);

        // Clear the input fields
        postInput.value = '';
        imageInput.value = '';
    } else {
        alert("Please enter text or upload an image!");
    }
});
