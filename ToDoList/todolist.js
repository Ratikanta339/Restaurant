document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('list');
  var newItemInput = document.getElementById('newItem');

  function addItem() {
    var newItemText = newItemInput.value.trim();

    if (newItemText !== '') {
      var li = document.createElement('li');
      li.innerHTML = `
        <span>${newItemText}</span>
        <button class="complete" onclick="toggleComplete(this)">Complete</button>
        <button class="remove" onclick="removeItem(this)">Remove</button>
      `;
      list.appendChild(li);
      newItemInput.value = '';
    }
  }

  function removeItem(button) {
    var li = button.parentElement;
    list.removeChild(li);
  }

  function toggleComplete(button) {
    var li = button.parentElement;
    li.classList.toggle('completed');
  }

  window.addItem = addItem;
  window.removeItem = removeItem;
  window.toggleComplete = toggleComplete;
});