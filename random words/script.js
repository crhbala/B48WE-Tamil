 async function coffee() {
    let responce = await fetch("https://random-words-api.vercel.app/word");
        let data = await responce.json();
    console.log(data);
    document.querySelector(".word").innerHTML = data[0].word;
    document.querySelector(".pronunciation").innerHTML = data[0].pronunciation;
    document.querySelector(".definition").innerHTML = data[0].definition;
}
coffee();
const button = document.querySelector("button");
button.addEventListener('click', () => {
    window.location.reload();
})