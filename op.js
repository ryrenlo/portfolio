var Score = 0;
document.addEventListener("DOMContentLoaded", () => {
  var op_characters = [
    { id: 1, url: "op.img/luffy.png" },
    { id: 2, url: "op.img/zoro.png" },
    { id: 3, url: "op.img/nami.png" },
    { id: 4, url: "op.img/usopp.png" },
    { id: 5, url: "op.img/sanji.png" },
    { id: 6, url: "op.img/chopper.png" },
    { id: 7, url: "op.img/robin.png" },
  ];
  op_characters.forEach((pair) => {
    op_characters.push({ id: pair.id, url: pair.url });
  });

  op_characters = shuffle(op_characters);

  console.log(op_characters);
  var flipped_cards = [];
  const allcards = document.getElementById("allcards");
  op_characters.forEach((img, index) => {
    const card = document.createElement("div");
    card.dataset.id = img.id;
    card.classList.add("card");

    // Create back face (mugiwara logo)
    const back = document.createElement("div");
    back.classList.add("card-face");
    const back_img = document.createElement("img");
    back_img.src = "op.img/mugiwara-back.png";
    back.appendChild(back_img);

    // Create front face (character)
    const front = document.createElement("div");
    front.classList.add("card-face");
    front.classList.add("card-front");
    const front_img = document.createElement("img");
    front_img.src = img.url;
    front.appendChild(front_img);

    // Add both faces to card
    card.appendChild(back);
    card.appendChild(front);

    card.addEventListener("click", flip_card);
    allcards.appendChild(card);
  });

  function flip_card() {
    if (
      this.classList.contains("flipped") ||
      this.classList.contains("matched") ||
      flipped_cards.length >= 2
    ) {
      return;
    }
    this.classList.add("flipped");

    flipped_cards.push(this);
    if (flipped_cards.length === 2) {
      setTimeout(matched_check, 500);
    }
  }
  function matched_check() {
    console.log("matched_check function");
    const [card1, card2] = flipped_cards;
    if (card1.dataset.id === card2.dataset.id) {
      card1.classList.add("matched");
      Score += 2;
      update_score();
      card2.classList.add("matched");
    } else {
      card1.classList.remove("flipped");
      Score -= 1;
      update_score();
      card2.classList.remove("flipped");
    }
    flipped_cards = [];
  }
});
function update_score() {
  document.getElementById("score").innerHTML = `Score:${Score}`;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
