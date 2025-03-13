document.addEventListener("DOMContentLoaded", () => {
  const animeTextElements = (selector, splitBy) => {
    const textContainers = document.querySelectorAll(selector);

    textContainers.forEach((textContainer) => {
      let elements = [];
      let elementType = "";

      if (splitBy === "words") {
        elements = textContainer.textContainer.trim().split(/\s+/);
        elementType = 'word';
      } else if (splitBy === 'letters') {
        const words = textContainer.textContent.trim().split(/\s+/);
        elements = [];

        words.forEach((word, wordIndex) => {
            for (let i = 0; i < word.length; i++){
                elements.push(word[i])
            }
        })
      }
    });
  };
});
