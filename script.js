// Smooth scrolling for navigation menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation for the contact form
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields before submitting the form.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for contacting us! We will get back to you shortly.');
    document.querySelector('form').reset();
});

// Alert for "Apply Now" button
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! The job application process will be available soon.');
    });
});

// Dynamic job cards loading
const jobContainer = document.querySelector('#jobs .row.g-4');
const loadMoreButton = document.createElement('button');
loadMoreButton.classList.add('btn', 'btn-secondary', 'mt-4');
loadMoreButton.textContent = 'Load More Jobs';
jobContainer.parentElement.appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        const newCard = document.createElement('div');
        newCard.className = 'col-md-4';
        newCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">New Job ${i + 1}</h5>
                    <p class="card-text">Location: Anywhere<br>Pay: 800/hour</p>
                    <a href="#" class="btn btn-primary">Apply Now</a>
                </div>
            </div>`;
        jobContainer.appendChild(newCard);
    }
    alert('More jobs loaded!');
});

// Back to Top button
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.display = 'none';
backToTop.style.background = '#007bff';
backToTop.style.color = 'white';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '50%';
backToTop.style.width = '40px';
backToTop.style.height = '40px';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.head.appendChild(style);
