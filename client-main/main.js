import './style.css'

const toggle = document.getElementById('switch');
const toggle_t = document.getElementById('switch-text');
const percentage = document.getElementById('percentage');
const progress = document.getElementById('blue');

toggle.addEventListener('click', async() => {
    const color = getComputedStyle(toggle_t).color;
    const newColor = str(color) == 'rgb(77,77,77)' ? 'rgb(4,99,146)' : 'rgb(77,77,77)';
    alert(newColor);
    toggle_t.style.color = newColor;
});

const inspect = document.getElementById('inspect');
inspect.addEventListener('click', async () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) { 
        var tabURL = tabs[0].url;

        fetch('https://api-nggq225f3a-uw.a.run.app/classify/url', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({url: tabURL})
        }).then(response => response.json()).then(data => {
            console.log(data);
            var value = data[0][0];
            percentage.textContent = `${Math.round(value*100)}%`;
            // progress.animate({'stroke-dashoffset': 198 * 0.5}, 1000);
            progress.style.strokeDashoffset = 198*(1-value);

        });
    })


})