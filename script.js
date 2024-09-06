
// SIDEBAR JAVASCRIPT START//

const toggleSidebar = document.querySelector("#tombol");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
});

// SIDEBAR JAVASCRIPT END //
