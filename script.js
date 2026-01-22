// ===== Posts Data =====
// Simple demo, later you can load from JSON or create separate HTML files
const posts = [
    {title:"Breaking News 1", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {title:"Breaking News 2", content:"Aliquam tincidunt mauris eu risus."},
    {title:"Breaking News 3", content:"Vestibulum auctor dapibus neque."}
];

// ===== Load Posts =====
const postsContainer = document.getElementById('posts');
posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'post';
    postEl.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    postsContainer.appendChild(postEl);
});

// ===== Monetag Ads =====
function showMonetagAd() {
    const adContainer = document.getElementById('ads');
    const script = document.createElement('script');
    script.src = "https://quge5.com/88/tag.min.js";
    script.async = true;
    script.setAttribute('data-zone','204416');
    script.setAttribute('data-cfasync','false');
    adContainer.appendChild(script);

    // Prevent closing for 10 sec (demo logic)
    const overlay = document.createElement('div');
    overlay.id = 'ad-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '9999';
    overlay.style.background = 'transparent';
    adContainer.appendChild(overlay);

    setTimeout(() => {
        overlay.remove(); // Remove block after 10 sec
    }, 10000);
}

// ===== Show ad on page load =====
window.addEventListener('load', () => {
    showMonetagAd();
});
