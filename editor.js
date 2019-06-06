window.addEventListener('load', () => {
    const markdownText = document.getElementById('markdownText');

    markdownText.addEventListener('input', () => {
        previewText.innerHTML = '';
        // previewText.innerHTML += markdownText.value;

        previewtext.innerHTML += compile(markdownText);

        

    });

    function compile(element) {
        let lines = element.value.split('\n');

        for (const line of lines) {
            const lineSplit = line.split(' ', 2);

            if (lineSplit[0].length <= 6) {
                let newHeadline = document.createElement(`h${lineSplit[0].length}`);
                newHeadline.textContent = lineSplit[1];
                return newHeadline;
            }
            
        }
    }

});