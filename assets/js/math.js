(function () {
  var root = document.querySelector(".post");
  if (!root || typeof renderMathInElement !== "function") return;
  renderMathInElement(root, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    ignoredClasses: ["highlight"],
    throwOnError: false
  });
})();
