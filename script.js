let growthCount = 0; // Initialize a counter to track the number of times the button grows

function reply(answer) {
    if(answer === 'Yes') {
        window.location.href = 'yes.html'; // Redirects to 'yes.html' for the "Yes" response
    } else if (answer === 'No' && growthCount < 50) {
        const yesButton = document.querySelector('.button'); // Correctly select the "Yes" button if it's an <a> tag
        let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        let newSize = currentSize + 1; // Increase font size by 1px
        yesButton.style.fontSize = `${newSize}px`;
        
        let currentPadding = parseInt(window.getComputedStyle(yesButton).padding);
        let newPadding = currentPadding + 1; // Increase padding by 1px
        yesButton.style.padding = `${newPadding}px ${newPadding * 2}px`; // Adjust padding proportionally

        growthCount++; // Increment the growth counter
    }
}
