const ADMIN_PASSWORD = "gstadmin2025"; // change this to your own secure password

// Password check
document.getElementById('passwordBtn').addEventListener('click', () => {
  const input = document.getElementById('adminPassword').value;
  if(input === ADMIN_PASSWORD){
    document.getElementById('passwordPrompt').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    document.getElementById('errorMsg').textContent = "Incorrect password!";
  }
});

// Load previous settings
window.addEventListener('load', () => {
  const logoData = localStorage.getItem('gsLogo');
  const logoPos = localStorage.getItem('gsLogoPosition');
  const logoSize = localStorage.getItem('gsLogoSize');
  const grad1 = localStorage.getItem('grad1');
  const grad2 = localStorage.getItem('grad2');
  const font = localStorage.getItem('gsFont');
  const launchDate = localStorage.getItem('launchDate');

  if (logoPos) document.getElementById('logoPosition').value = logoPos;
  if (logoSize) document.getElementById('logoSize').value = logoSize;
  if (grad1) document.getElementById('grad1').value = grad1;
  if (grad2) document.getElementById('grad2').value = grad2;
  if (font) document.getElementById('fontSelect').value = font;
  if (launchDate) document.getElementById('launchDate').value = new Date(launchDate).toISOString().slice(0,16);
});

// Logo upload
document.getElementById('logoInput').addEventListener('change', function () {
  const file = this.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
    localStorage.setItem('gsLogo', e.target.result);
    alert('Logo uploaded successfully!');
  };
  reader.readAsDataURL(file);
});

// Apply changes
document.getElementById('applyBtn').addEventListener('click', () => {
  const logoPos = document.getElementById('logoPosition').value;
  const logoSize = document.getElementById('logoSize').value;
  const grad1 = document.getElementById('grad1').value;
  const grad2 = document.getElementById('grad2').value;
  const font = document.getElementById('fontSelect').value;
  const launchDate = document.getElementById('launchDate').value;

  localStorage.setItem('gsLogoPosition', logoPos);
  localStorage.setItem('gsLogoSize', logoSize);
  localStorage.setItem('grad1', grad1);
  localStorage.setItem('grad2', grad2);
  localStorage.setItem('gsFont', font);
  if(launchDate) localStorage.setItem('launchDate', launchDate);

  alert('Settings saved! Open index.html to see changes.');
});
