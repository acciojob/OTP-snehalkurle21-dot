//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus first input on page load
codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {

        // Move forward on number input
        if (e.key >= '0' && e.key <= '9') {
            code.value = '';
            setTimeout(() => {
                if (codes[index + 1]) {
                    codes[index + 1].focus();
                }
            }, 10);
        }

        // Move backward on backspace
        if (e.key === 'Backspace') {
            if (code.value === '' && codes[index - 1]) {
                codes[index - 1].focus();
                codes[index - 1].value = '';
            }
        }
    });
});
