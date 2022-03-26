let Fetch = function () {
  let word = input.value;
  console.log(word);
  let FetchObj = new XMLHttpRequest();
  FetchObj.open(
    "GET",
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    true
  );
  FetchObj.onerror = function () {
    console.log("Oho masla ho gya bhai");
  };
  FetchObj.onprogress = function () {
    list.innerHTML=''
  };
  FetchObj.onload = function () {
    // console.log("Chal gya bhai");
    let Fruits = JSON.parse(this.responseText);
    for (i = 0; i <= Fruits[0].meanings[0].definitions.length - 1; i++) {
      let lst = document.createElement('li')
      console.log(Fruits[0].meanings[0].definitions[i].definition);
      let tn = document.createTextNode(`${Fruits[0].meanings[0].definitions[i].definition}`)
      lst.appendChild(tn)
      list.appendChild(lst)
    }
  };
  FetchObj.send();
};
let input = document.createElement("input");
// input.setAttribute('value','inputValue')
let btn = document.createElement("button");
let list = document.createElement('ul')

// list.innerHTML(`<li>ok g</li>`)
btn.textContent = "Meaning?";
btn.addEventListener("click", Fetch);
let D = document.getElementById("DIV");
D.appendChild(input);
D.appendChild(btn);
D.appendChild(list)

