const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", () => {
    const urlInput = document.getElementById("urlInput");
    const url = urlInput.value.trim();

    if (url === "") {
        return;
    }

    const videoId = getVideoId(url);
    if (videoId !== null) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        openThumbnailInNewTab(thumbnailUrl);
    } else {
        showError("Invalid YouTube video URL");
    }
});

function getVideoId(url) {
    const videoIdRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|(?:\/(?:[a-z]{1,3}\/)?)?embed\/)|youtu\.be\/|(?:[a-z]{1,3}\/)?[a-z]{1,2}\/)?([\w-]{10,12})/i;
    const match = url.match(videoIdRegex);
    return match !== null ? match[1] : null;
}

function openThumbnailInNewTab(thumbnailUrl) {
    const win = window.open(thumbnailUrl, "_blank");
    win.focus();
}

function showError(message) {
    const result = document.getElementById("result");
    result.innerHTML = `<p class="error">${message}</p>`;
}
