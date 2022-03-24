// Elements
const submitBtnEl = document.querySelector("#submit");
const topTextEl = document.querySelector("#topText");
const bottomTextEl = document.querySelector("#bottomText");
const imageLinkEl = document.querySelector("#imageLink");
const memes = document.querySelector("#Memes");


//-----------------------------------
//          Listener functions
//-----------------------------------

//vvvvvvvvvvvvvvvvvvvvvvvv
// Submit button listener
//vvvvvvvvvvvvvvvvvvvvvvvv

const submitListener = function(e) {
    
    e.preventDefault();

    // Add memes to the page only if the user provided some text or image
    if (topTextEl.value != '' || 
        bottomTextEl.value != '' || 
        imageLinkEl.value != '')  {
            const newMeme = document.createElement("div");  // Create a new meme and 'classify' it
            newMeme.classList.add("meme");
            
            // Add a new top text element to the new meme
            const newTopText = document.createElement("span");
            newTopText.innerText = topTextEl.value;
            newMeme.appendChild(newTopText);

            // If the user provided an image, add it to the new meme
            if (imageLinkEl.value != '') {
                const newMemeImg = document.createElement("img");
                newMemeImg.setAttribute("src", imageLinkEl.value );
                newMemeImg.setAttribute("alt", "Meme Image");
                // If the user's pic was not found, display a default one
                newMemeImg.setAttribute("onerror", "this.src = 'FileNotFound.jpg'");
                newMeme.appendChild(newMemeImg);
            }

            // Add a new bottom text element to the new meme
            const newBottomText = document.createElement("span");
            newBottomText.innerText = bottomTextEl.value;
            newMeme.appendChild(newBottomText);

            // Add a 'remove meme' button to the new meme, with a 'remove' listener
            const removeMemeBtn = document.createElement("button");
            removeMemeBtn.innerText = "Remove meme";
            removeMemeBtn.setAttribute("id", "removeBtn");
            removeMemeBtn.addEventListener("click", removeListener);
            newMeme.appendChild(removeMemeBtn);

            // Add a horizontal rule, to visually seperate between memes
            const hr = document.createElement("hr");
            newMeme.appendChild(hr);
            

            // Add the new meme element to the page
            memes.appendChild(newMeme);

            // Clear the input fields 
            topTextEl.value = '';
            bottomTextEl.value = '';
            imageLinkEl.value = ''; 
        }

        // Bring the cursor to the first input field
        topTextEl.focus();
}

//vvvvvvvvvvvvvvvvvvvvvvvv
// Remove Button Listener
//vvvvvvvvvvvvvvvvvvvvvvvv

const removeListener = function(e) {
    e.target.parentElement.remove();
}


//---------------------------------
//     After the page is loaded
//---------------------------------
submitBtnEl.addEventListener("click", submitListener);  // Add a listener to the form submit button
topTextEl.focus();  // Bring the cursor to the first input field

