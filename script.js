/**
 * Toggles the visibility of the Wedding Timeline section
 */
function toggleProgram() {
    const timeline = document.getElementById("weddingTimeline");
    const button = document.getElementById("programToggleBtn");
    const icon = button.querySelector(".toggle-icon");

    if (!timeline) return;

    const isCollapsed = timeline.classList.contains("collapsed");

    if (isCollapsed) {
        timeline.classList.remove("collapsed");
        timeline.classList.add("expanded");
        button.setAttribute("aria-expanded", "true");
        if (icon) icon.textContent = "▲";
    } else {
        timeline.classList.remove("expanded");
        timeline.classList.add("collapsed");
        button.setAttribute("aria-expanded", "false");
        if (icon) icon.textContent = "▼";
    }
}
