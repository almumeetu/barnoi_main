const progressList = document.querySelectorAll(".progress-bar .progress li");
const progressFillBar = document.querySelector(".progress-bar .bar .fill");
let current = 1,
  min = 1,
  max = 5;
let asc = true;

progressList.forEach((pgs) => {
  pgs.addEventListener("click", () => {
    if (asc) {
      progressList[current].classList.add("active");

      progressList[current].style.backgroundColor = "rgba(240, 74, 0, 1)";
      current++;
    } else {
      progressList[current - 1].classList.remove("active");
      current--;
    }

    if (current === max) asc = false;
    else if (current === min) asc = true;

    updateProgress();
  });
});

function updateProgress() {
  const percent = ((current - 1) / (progressList.length - 1)) * 100;
  console.log(percent);
  progressFillBar.style.width = `${percent}%`;
}

//checkbox
// document.getElementById('toggleCheckbox').addEventListener('change', function() {
//     var content = document.getElementById('content');
//     if (this.checked) {
//         content.classList.remove('d-none');
//     } else {
//         content.classList.add('d-none');
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle content visibility
  function toggleContent(checkboxId, contentId) {
    var checkbox = document.getElementById(checkboxId);
    var content = document.getElementById(contentId);

    checkbox.addEventListener("change", function () {
      content.style.display = checkbox.checked ? "block" : "none";
    });
  }

  // Initialize toggle for each checkbox
  toggleContent("toggleCheckbox1", "content1");
  toggleContent("toggleCheckbox2", "content2");
  toggleContent("toggleCheckbox3", "content3");
});
