document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
  });

function generate(){
    var num = document.getElementById("num").value;
    var text = document.getElementById("floatingTextarea").value+"\n";
    // console.log(num);
    // console.log(text);
    let result = text.repeat(num);
    // console.log(result);
    document.getElementById("res").innerHTML = result;
}

function copy(){
  var copyText = document.getElementById("res");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}