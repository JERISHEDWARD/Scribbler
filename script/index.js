// Function to open the sign-up modal
function openSignupModal() {
    closeModal('signinModal'); // Close the sign-in modal if open
    showModal('signupModal');
}

// Function to open the sign-in modal
function openSigninModal() {
    closeModal('signupModal'); // Close the sign-up modal if open
    showModal('signinModal');
}

// Function to close modals
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Function to display modal
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Sign Up function (replace with your actual signup logic)
function signup() {
    var nameInput = document.getElementById('nameInput').value;
    var usernameInput = document.getElementById('usernameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    var confirmPasswordInput = document.getElementById('confirmPasswordInput').value;

    if (!nameInput || !usernameInput || !passwordInput || !confirmPasswordInput) {
        document.getElementById('signupError').innerText = 'Please fill out all fields.';
    } else {
        // Your signup logic here
        document.getElementById('signupError').innerText = '';
        closeModal('signupModal');
    }
}

// Sign In function (replace with your actual signin logic)
function signin() {
    var signinUsernameInput = document.getElementById('signinUsernameInput').value;
    var signinPasswordInput = document.getElementById('signinPasswordInput').value;

    if (!signinUsernameInput || !signinPasswordInput) {
        document.getElementById('signinError').innerText = 'Please fill out all fields.';
    } else {
        // Your signin logic here
        document.getElementById('signinError').innerText = '';
        closeModal('signinModal');
    }
}

function navigateToAllPosts() {
    window.location.href = 'postslist.html'; // Update the path accordingly
}

function openCreatePostModal() {
    closeModal('signinModal'); // Close the sign-in modal if open
    closeModal('signupModal'); // Close the sign-up modal if open
    showModal('createPostModal');
}

// Function to create a new post (replace with your actual logic)
function createPost() {
    var postTitle = document.getElementById('postTitle').value;
    var postContents = document.getElementById('postContents').value;

    // Validate if title and contents are not empty
    if (!postTitle || !postContents) {
        alert('Please fill out all fields.');
    } else {
        // Your logic to create a new post (you can implement API request here)
        alert('Post created successfully!');
        closeModal('createPostModal');
    }
}
