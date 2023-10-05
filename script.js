//your code here!
document.addEventListener("DOMContentLoaded", function () {
  // Get the list and create an array of list items
  const list = document.getElementById("infi-list");

  // Function to add a new list item
  function addListItem() {
	const listItems = Array.from(list.children);
    const newItem = document.createElement("li");
    newItem.textContent = "List Item " + (listItems.length + 1);
    list.appendChild(newItem);
  }

  // Add 10 list items initially
  for (let i = 0; i < 10; i++) {
    addListItem();
  }

  // Function to check if the user has reached the end of the list
  function isAtEnd() {
    const lastItem = listItems[listItems.length - 1];
    const lastItemRect = lastItem.getBoundingClientRect();
    return lastItemRect.bottom <= list.innerHeight;
  }

  // Function to load more items when the user reaches the end
  function loadMoreItems() {
    if (isAtEnd()) {
      for (let i = 0; i < 2; i++) {
        addListItem();
      }
    }
  }

  // Attach a scroll event listener to the window
  window.addEventListener("scroll", loadMoreItems);
});

