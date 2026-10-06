"use strict";

// Get the HTML elements we need
const form = document.getElementById("checklist-form");
const input = document.getElementById("checklist-item");
const checklist = document.getElementById("checklist");

// Add a new checklist item
function addChecklistItem(text) {
  // Create the list item
  const listItem = document.createElement("li");

  // Create the checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create the label for the checklist item
  const label = document.createElement("label");
  label.textContent = text;

  // Add the checkbox and label to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  // Add the list item to the unordered list
  checklist.appendChild(listItem);
}

// Listen for the form being submitted
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get the text from the textbox
  const itemText = input.value.trim();

  // Don't add an empty item
  if (itemText === "") {
    return;
  }

  // Add the item to the checklist
  addChecklistItem(itemText);

  // Clear the textbox
  input.value = "";

  // Put the cursor back in the textbox
  input.focus();
});