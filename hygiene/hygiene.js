document.addEventListener("DOMContentLoaded", function() {
    console.log("Hygiene Tips Page Loaded");

    // Back to Top Button
    let backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.innerText = "⬆";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Adding hover effect to videos
    let videos = document.querySelectorAll("iframe");
    videos.forEach(video => {
        video.addEventListener("mouseover", function() {
            console.log("User is watching: " + video.src);
        });
    });
});
