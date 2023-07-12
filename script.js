const arr = ["Adult capybaras can weigh up to 70 kilograms, and their length can reach about 1.2 meters. Their size is comparable to that of some dogs.", "Capybaras are semi-aquatic animals and excellent swimmers. They inhabit tropical regions of South America and are often found near bodies of water such as rivers, swamps, and lakes."," which can consist of up to 100 individuals. These groups include several adults, their offspring, and young individuals of various ages."];

const container = document.querySelector(".main");

container.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (button) {
    const div = button.nextElementSibling;
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
});


function buttonKapibara(){
  alert(arr[parseInt(Math.random() * arr.length - 1)])
}
