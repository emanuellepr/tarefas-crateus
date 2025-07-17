function showMonth(event, monthId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.month-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(monthId).classList.add('active');
  event.target.classList.add('active');
}
