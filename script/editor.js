window.addEventListener('load', () => {
    const markdownText = document.getElementById('markdownText');

    markdownText.addEventListener('input', () => {
        previewText.innerHTML = '';

        const lines = markdownText.value.split('\n');

        for (const line of lines) {

          console.log(markdownText.value);

          if (line.charAt(0) === '#') {
            previewText.appendChild(createHeading(markdownText));
          } else {
            previewText.innerHTML += markdownText.value;
          }
        }
    });

    function createHeading(element) {
        const lines = element.value.split('\n');

        for (const line of lines) {
            const lineSplit = line.split(' ', 2);

            if (lineSplit[0].length <= 6) {
                let newHeadline = document.createElement(`h${lineSplit[0].length}`);
                console.log(`h${lineSplit[0].length}`);
                console.log(newHeadline);
                lineSplit[1] = lineSplit[1].replace('undefined', '')
                newHeadline.innerHTML = lineSplit[1];
                return newHeadline;
            }

        }
    }

});
