document.addEventListener("DOMContentLoaded", function () {

  const compContainer = document.getElementById('comparison_section')

  const compcloseButton = compContainer.querySelector(".close-btn-Comparison");
  compcloseButton.addEventListener("click", hideCompContainer);

  const prevElectionButton = document.getElementById('prevElectionBtn')
  prevElectionButton.addEventListener("click", showCompContainer);

  function showCompContainer() {
    compContainer.style.display = "flex";
  }


  function hideCompContainer() {
    compContainer.style.display = "none";
  }

});
