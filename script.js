document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("navbarDrawer");
    const toggleButton = document.querySelector(
      '[data-bs-target="#navbarDrawer"]'
    );
    const closeButton = drawer.querySelector('[data-bs-dismiss="drawer"]');
  
    toggleButton.addEventListener("click", () => {
      if (!drawer.open) {
        drawer.showModal();
        toggleButton.setAttribute("aria-expanded", "true");
      }
    });
  
   closeButton.addEventListener("click", () => {
      drawer.close();
    });
  
    drawer.addEventListener("close", () => {
      toggleButton.setAttribute("aria-expanded", "false");
    });
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) {
        drawer.close();
      }
    });
  
    const menuButton = drawer.querySelector('[data-bs-toggle="menu"]');
    const menu = menuButton.nextElementSibling;
  
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  
    drawer.querySelectorAll(".nav-link[href]").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.close();
      });
    });
  
    const searchForm = drawer.querySelector('form[role="search"]');
  
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const searchInput = searchForm.querySelector('input[type="search"]');
      const query = searchInput.value.trim();
  
      if (query) {
        window.location.href = `/?search=${encodeURIComponent(query)}`;
      }
    });
  });