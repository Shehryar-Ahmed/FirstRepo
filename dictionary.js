// FetchAPI Method
let Fetch1 = () => {
  let word = input.value;
  url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then((response) => {
      list.innerHTML = "";
      return response.json();
    })
    .then((data) => {
      JSON.stringify(data);
      console.log(data);
      if (data[0] === undefined) {
        let lst = document.createElement("li");
        console.log(`${word} can not be found in dictionary`);
        let tn = document.createTextNode(
          `${word} can not be found in dictionary`
        );
        lst.appendChild(tn);
        list.appendChild(lst);
      } else {
        for (i = 0; i <= data[0].meanings[0].definitions.length - 1; i++) {
          let lst = document.createElement("li");
          console.log(data[0].meanings[0].definitions[i].definition);
          let tn = document.createTextNode(
            `${data[0].meanings[0].definitions[i].definition}`
          );
          lst.appendChild(tn);
          list.appendChild(lst);
        }
      }
    });
};
// Ajax Xhtml Method
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
    list.innerHTML = "";
  };
  FetchObj.onload = function () {
    // console.log("Chal gya bhai");
    let Fruits = JSON.parse(this.responseText);
    if (Fruits[0] === undefined) {
      let lst = document.createElement("li");
      console.log(`${word} can not be found in dictionary`);
      let tn = document.createTextNode(
        `${word} can not be found in dictionary`
      );
      lst.appendChild(tn);
      list.appendChild(lst);
    } else {
      for (i = 0; i <= Fruits[0].meanings[0].definitions.length - 1; i++) {
        let lst = document.createElement("li");
        console.log(Fruits[0].meanings[0].definitions[i].definition);
        let tn = document.createTextNode(
          `${Fruits[0].meanings[0].definitions[i].definition}`
        );
        lst.appendChild(tn);
        list.appendChild(lst);
      }
    }
  };
  FetchObj.send();
};
let input = document.createElement("input");
// input.setAttribute('value','inputValue')
let btn = document.createElement("button");
let list = document.createElement("ul");

// list.innerHTML(`<li>ok g</li>`)
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    Fetch();
  }
});
btn.textContent = "Meaning?";
btn.addEventListener("click", Fetch1);
let D = document.getElementById("DIV");
D.appendChild(input);
D.appendChild(btn);
D.appendChild(list);
