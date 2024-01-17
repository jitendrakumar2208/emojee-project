function searchEmoji() {
    let inputvalue = document.getElementById("search-field").value

    displayResult(inputvalue)
    return false;
}

function displayResult(searchQuery = "") {
    let filteredData = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(ele=>ele.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(ele=>ele.startsWith(searchQuery))){
            return true;
        }
    })


    let parent = document.getElementById("emoji-field")
    parent.innerText = "";
    
    filteredData.forEach((e) => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliase = document.createElement("td");
        let new_desc = document.createElement("td");


        new_emoji.innerText = e.emoji;
        new_aliase.innerText = e.aliases;
        new_desc.innerText = e.description;

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliase);
        new_row.appendChild(new_desc);

        parent.appendChild(new_row)
    })
}


document.getElementById("search-field").addEventListener("keyup", searchEmoji)
window.onload = () => displayResult();