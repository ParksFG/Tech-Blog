const loginFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#usernameLogin');
    const passwordEl = document.querySelector('#passwordLogin');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        userName: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/api/dashboard');
    } else {
      alert('Failed to login');
    }
};
  
  
const signupFormHandler = async function (event) {
    event.preventDefault();
  
    const user_name = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        userName, password
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/api/dashboard');
    } else {
      alert('Failed to sign up');
    }
};
  
document
    .querySelector('.loginForm')
    .addEventListener('submit', loginFormHandler);
document
    .querySelector('.signupForm')
    .addEventListener('submit', signupFormHandler);
  