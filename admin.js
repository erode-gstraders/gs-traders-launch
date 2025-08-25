const logoInput = document.getElementById('logoInput');
const logoPosition = document.getElementById('logoPosition');
const logoSize = document.getElementById('logoSize');
const grad1 = document.getElementById('grad1');
const grad2 = document.getElementById('grad2');
const fontSelect = document.getElementById('fontSelect');
const launchDateInput = document.getElementById('launchDate');
const applyBtn = document.getElementById('applyBtn');

applyBtn.addEventListener('click', () => {
  // Logo
  if (logoInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem('gsLogo', e.target.result);
    };
    reader.readAsDataURL(logoInput.files[0]);
  }

  // Logo position
  localStorage.setItem('gsLogoPosition', logoPosition.value);

  // Logo size
  localStorage.setItem('gsLogoSize', logoSize.value);

  // Gradient colors
  localStorage.setItem('grad1', grad1.value);
  localStorage.setItem('grad2', grad2.value);

  // Font
  localStorage.setItem('gsFont', fontSelect.value);

  // Countdown date
  if (launchDateInput.value) {
    localStorage.setItem('launchDate', launchDateInput.value);
  }

  alert("Changes saved! Open index.html to see them.");
});
