let addItemForm = document.querySelector(".add-item-form");
let addItemInput = document.querySelector(".item-input");
let ul = document.querySelector(".list-group");
let search = document.querySelector(".search");

// Add item to the list
function addItem(e) {
    e.preventDefault();

    let li = document.createElement("li");
    let button = document.createElement("button");

    li.setAttribute("class", "list-group-item");
    li.append(document.createTextNode(addItemInput.value));

    button.textContent = "X";
    button.setAttribute("class", "btn btn-sm btn-danger float-right");

    li.append(button);

    ul.append(li);
}

// Remove item from the list when remove button is clicked
function removeItem(e) {
    // check to see if the remove button is clicked
    if (e.target.classList.contains("btn-sm")) {
        let itemText = e.target.parentElement.outerText;
        let slicedItemText = itemText.slice(0, itemText.length-2);
        if (confirm(`Delete "${slicedItemText}". Are you sure?`)) {
            e.target.parentElement.remove();
        }
    }
    
}

// Searching for matching items in the list,
// show maching item and hide otherwise
function searchItem(e) {
    let searchText = e.target.value.toLowerCase();
    let allLi = ul.getElementsByTagName("li");

    Array.from(allLi).forEach(li => {
        let itemText = li.firstChild.textContent.toLowerCase();
        
        if (itemText.indexOf(searchText) != -1) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}

addItemForm.addEventListener("submit", addItem);
ul.addEventListener("click", removeItem);
search.addEventListener("keyup", searchItem);