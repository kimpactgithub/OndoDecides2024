document.addEventListener("DOMContentLoaded", function () {

  const HScompContainer = document.getElementById('HS_comparison_section')

  const HScompcloseButton = HScompContainer.querySelector(".HS_close-btn-Comparison");
  HScompcloseButton.addEventListener("click", hideHSCompContainer);

  const HSprevElectionButton = document.getElementById('HSvCE')
  HSprevElectionButton.addEventListener("click", showHSCompContainer);

  function showHSCompContainer() {
    HScompContainer.style.display = "flex";
  }


  function hideHSCompContainer() {
    HScompContainer.style.display = "none";
  }

});