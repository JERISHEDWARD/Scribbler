// Function to open the modal and pass the post index to be deleted
function openModal(event, postIndex) {
    event.preventDefault();
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Store the post index as a data attribute in the modal
    modal.setAttribute('data-post-index', postIndex);
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Function to delete the post
// Function to delete the post
function deletePost() {
    var modal = document.getElementById('myModal');
    var postIndex = modal.getAttribute('data-post-index');

    // Remove the post from the DOM
    var postElements = document.querySelectorAll('.cardview');
    
    // Ensure the postIndex is a valid number and within the range of postElements
    if (!isNaN(postIndex) && postIndex >= 0 && postIndex < postElements.length) {
        var postElement = postElements[postIndex];
        postElement.parentNode.removeChild(postElement);

        // Close the modal
        closeModal();
    } else {
        console.error("Invalid post index:", postIndex);
    }
}


// Add this snippet at the end of your JavaScript file to close the modal when clicking outside it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Attach event listeners to the trash icons to open the modal
var trashIcons = document.querySelectorAll('.two a');
trashIcons.forEach(function(icon, index) {
    icon.addEventListener('click', function(event) {
        openModal(event, index);
    });
});
