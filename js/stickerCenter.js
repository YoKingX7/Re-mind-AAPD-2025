export function stickerCenter() {
  var listGroup = document
    .getElementById("single-selection-group")
    .getElementsByTagName("li");

  for (var i = 0; i < listGroup.length; i++) {
    listGroup[i].addEventListener("click", function () {
      this.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    });
  }
}
