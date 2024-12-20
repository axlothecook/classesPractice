// Project 1: Mouseover Element
// Purpose: practice functions, event listeners, get and track mouse cursor on page
// Source: https://skillcrush.com/blog/projects-you-can-do-with-javascript/#mouse

// Project code below

const root = document.querySelector('html');

const originalCursor = document.createElement('div');
originalCursor.classList.add('cursor');
root.appendChild(originalCursor);

const followingDot = document.createElement('div');
followingDot.classList.add('cursor', 'follower');
root.appendChild(followingDot);

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

root.addEventListener('mousemove', function (e) {
    setPosition(followingDot, e);
    setPosition(originalCursor, e);
});