function copyCodeToClipboard(button) {
  var codeText = button.parentNode.querySelector(".code-text pre").innerText;

  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeText;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

