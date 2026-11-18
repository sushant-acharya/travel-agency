// Filter packages on Home Page
function filterPkg(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.cat === category) ? 'flex' : 'none';
  });
}

// Auto-select package from URL & validate Contact Form
document.addEventListener('DOMContentLoaded', () => {
  const pkgSelect = document.getElementById('packageSelect');
  const params = new URLSearchParams(window.location.search);
  if (pkgSelect && params.get('pkg')) {
    pkgSelect.value = params.get('pkg');
  }

  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      document.getElementById('formMsg').textContent = `Thank you, ${name}! Your inquiry has been received.`;
      form.reset();
    });
  }
});