// Get references to elements
const chapterInput = document.getElementById('chapterInput');
const addChapterBtn = document.getElementById('addChapterBtn');
const chapterList = document.getElementById('chapterList');

// Add click event listener to Add Chapter button
addChapterBtn.addEventListener('click', function() {
  const chapterName = chapterInput.value.trim();

  if (chapterName !== '') {
    // Create li element
    const listItem = document.createElement('li');
    listItem.textContent = chapterName;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    // Add click event listener to delete button
    deleteBtn.addEventListener('click', function() {
      listItem.remove();
    });

    // Append delete button to li element
    listItem.appendChild(deleteBtn);

    // Append li element to chapter list
    chapterList.appendChild(listItem);

    // Clear input value and set focus
    chapterInput.value = '';
    chapterInput.focus();
  }
});
