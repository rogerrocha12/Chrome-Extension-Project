// Replaces each instance of "cat" with a hosted Tenor GIF using <img>
function replaceCatWithGif(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const regex = /\bcat\b/gi; // looks for any variation of cat like upper case or lowercase 
    if (regex.test(node.textContent)) { // checks to see if text contains 'cat' 
      const wrapper = document.createElement("span");  //creates a box to hold our changed text and gifs 
      const parts = node.textContent.split(regex); // splits the sentence into chunks and removes cat 

      parts.forEach((part, index) => { // Goes through each chuck of the sentence 
        wrapper.appendChild(document.createTextNode(part)); // adds each part of the original sentence into a new box 
        if (index < parts.length - 1) 
        { 
          const img = document.createElement("img"); //creates a image box
          img.src = "https://media1.tenor.com/m/ri-Ue99WZ4UAAAAd/angry-cat.gif"; //set image to show cat gif from link 
          img.alt = "cat"; // if the image doesnt load then show 'cat' 
          img.className = "cat-gif-img"; // Gives the img a style. 
          wrapper.appendChild(img); // places image next to the texts 
        }
      });

      node.parentNode.replaceChild(wrapper, node); // replace original sentence with new sentence that contains the cat gifs
    }
  } else if (
    // Continues to check the node if its a html element.
    node.nodeType === Node.ELEMENT_NODE &&
    !["SCRIPT", "STYLE", "TEXTAREA", "INPUT"].includes(node.nodeName) //ignores script, style, textarea, input
  ) {
    node.childNodes.forEach(replaceCatWithGif); // runs function again once its checks its a valid html element
  }
}

replaceCatWithGif(document.body);
