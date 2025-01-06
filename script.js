// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
document.body.setAttribute('data-theme', prefersDarkScheme.matches ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Form Submission
document.querySelector('.submit-button').addEventListener('click',() => {
    if (!document.querySelector('.nom').value || !document.querySelector('.prenom').value
     || !document.querySelector('.email').value || !document.querySelector('.ville').value || 
      !document.querySelector('.numero').value
) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }
    try {
        const response = fetch('https://rabiebackend.onrender.com/article', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             StudentLastName: document.querySelector('.nom').value,
             StudentFirstName:  document.querySelector('.prenom').value,
             Niveau:  document.querySelector('.niveau').value,
             Email: document.querySelector('.email').value,
             Numero:  document.querySelector('.numero').value,
             Ville: document.querySelector('.ville').value,
        }),
      });
  
      alert('Votre inscription est confirmée!');
      location.reload();
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  });

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to bottom navigation
const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
bottomNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        bottomNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
