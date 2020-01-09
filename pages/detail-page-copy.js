// document.getElementById("msg").value.length;
console.log("Start of Javascript file");
function doesNotPassAllValidations(name, msg) {
    console.log("start of doesnotpassallvas")
    if (!msg || !name) {
        console.log("this is msg:", msg, ".this is", name);
        alert("You forgot to fill in your name or message!");
        return true;
    }
    
    if (document.getElementById("msg").value.length <= 280) {
        alert("You're messag is more than 280 characters.");
        return true;
    }
    return false;
}

function submitComment() {
    // gather data
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const textArea = document.getElementById("msg");
    const msg = textArea.value;
    const msgLength = msg.length;
    console.log("test");
    
    // adjust the elements we created
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
    
    if (doesNotPassAllValidations() === false) {
      // display the elements on the page
      const commentSection = document.getElementById("comments");
      commentSection.appendChild(comment);
      // reset form values
      inputField.value = null;
      textArea.value = null;
    } else {
      // create the elements you need
      const comment = document.createElement("section");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");  
    }
}
