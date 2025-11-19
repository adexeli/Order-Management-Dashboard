document.addEventListener("DOMContentLoaded", () => {
  const menuOpenButton = document.getElementById("mobile-menu-toggle");
  const menuCloseButton = document.getElementById("mobile-sidebar-close");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  // Function to open the sidebar
  function openSidebar() {
    body.classList.add("sidebar-open");
  }

  // Function to close the sidebar
  function closeSidebar() {
    body.classList.remove("sidebar-open");
  }

  // Add event listeners
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", openSidebar);
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", closeSidebar);
  }

  if (overlay) {
    // Close the sidebar if the user clicks the overlay
    overlay.addEventListener("click", closeSidebar);
  }
});
