//Add interactivity or dynamic behavior here
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is linked and working!");

    const eventSections = document.querySelectorAll(".event-section");

    eventSections.forEach((section) => {
        const img = section.querySelector(".event-img img");
        const text = section.querySelector(".event-text p");

        // Add hover effect to images
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });

        // Add click event to expand/collapse text
        text.addEventListener("click", () => {
            text.classList.toggle("expanded");
        });
    });
});