const cubeContainer = document.getElementById('cube-container');
let rotationX = 0;
let rotationY = 0;
let autoRotate = false;

function updateCubeTransform() {
    cubeContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function Left() {
    rotationY -= 45;
    updateCubeTransform();
}

function Right() {
    rotationY += 45;
    updateCubeTransform();
}

function Up() {
    rotationX -= 45;
    updateCubeTransform();
}

function Down() {
    rotationX += 45;
    updateCubeTransform();
}

function startRotation() {
    autoRotate = true;
    rotateAutomatically();
}

function stopRotation() {
    autoRotate = false;
}

function rotateAutomatically() {
    if (autoRotate) {
        rotationY += 0.5;
        updateCubeTransform();
        requestAnimationFrame(rotateAutomatically);
    }
}


let password = '';

function appendNumber(number) {
    if (password.length < 6) {
        password += number;
        updatePasswordInput();
    }
}

function clearPassword() {
    password = '';
    updatePasswordInput();
}

function submitPassword() {
    console.log('Submitted Password:', password);
    if (password === '432242') { // 
        showOverlay('정답입니다~' ); // Display an alert if the password is correct
    } else {
        showOverlay('Incorrect password. Please try again.'); // Display an alert if the password is incorrect
    }
}

function updatePasswordInput() {
    document.getElementById('password-input').value = password;
    document.getElementById('password-value').innerText = password;
}

function showOverlay(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('website-link').setAttribute('href', 'https://www.youtube.com'); // Set your desired link
    document.getElementById('overlay').style.display = 'flex';
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}