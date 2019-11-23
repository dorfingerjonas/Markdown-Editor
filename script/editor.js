window.addEventListener('load', () => {
    const markdownText = document.getElementById('markdownText');
    const previewText = document.getElementById('previewText');

    markdownText.addEventListener('input', () => {
      previewText.innerHTML = '';

      const lines = markdownText.value.split('\n');

      for (const line of lines) {
        if (line.charAt(0) === '#' && line.charAt(1) === ' ') {
          previewText.appendChild(createHeadline(markdownText));
        } else if (line.charAt(0) === '-' && line.charAt(1) === ' ' && false) {
          previewText.appendChild(createUnorderedList(markdownText));
        } else {
          const text = document.createElement('p');
          text.textContent = line;

          previewText.appendChild(text);
        }
      }
    });

    function createHeadline(element) {
      const lines = element.value.split('\n');

      for (const line of lines) {
        const lineSplit = line.split(' ', 2);

        if (lineSplit[0].length <= 6) {
          let newHeadline = document.createElement(`h${lineSplit[0].length}`);
          lineSplit[1] = lineSplit[1].replace('undefined', '')
          newHeadline.textContent = lineSplit[1];
          return newHeadline;
        }
      }
    }

    function createUnorderedList(element) {
      const lines = element.value.split('\n');
      const ul = document.createElement('ul');

      for (const line of lines) {
        const lineSplit = line.split(' ', 2);
        console.log(line);
        
        const newListItem = document.createElement('li');
        newListItem.textContent = lineSplit[1];
        ul.appendChild(newListItem);
      }
      
      return ul;
    }
});
