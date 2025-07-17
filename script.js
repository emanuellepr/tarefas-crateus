function showMonth(event, monthId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.month-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(monthId).classList.add('active');
  event.target.classList.add('active');
}

// Recuperar todos os checkboxes da página
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox, index) => {
  const id = checkbox.id || `checkbox-${index}`;

  // Pegar o valor salvo no localStorage
  const saved = localStorage.getItem(id);
  if (saved === "true") {
    checkbox.checked = true;
  }

  // Salvar mudança no localStorage ao clicar
  checkbox.addEventListener("change", () => {
    localStorage.setItem(id, checkbox.checked);
  });
});