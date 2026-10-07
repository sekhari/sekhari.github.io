(function () {
  var pages = document.querySelectorAll(".page");
  var navLinks = document.querySelectorAll(".site-nav a");

  function show(id) {
    var target = document.querySelector('.page[data-page="' + id + '"]') ||
      document.querySelector('.page[data-page="home"]');
    pages.forEach(function (page) {
      page.classList.toggle("active", page === target);
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + target.dataset.page);
    });
    window.scrollTo(0, 0);
  }

  function route() {
    show(decodeURIComponent(location.hash.slice(1)) || "home");
  }

  window.addEventListener("hashchange", route);
  route();

  function load(url, containerId) {
    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error(response.status + " " + url);
        return response.text();
      })
      .then(function (html) {
        document.getElementById(containerId).innerHTML = html;
      })
      .catch(function (error) {
        console.error("Error loading " + url + ":", error);
      });
  }

  document.querySelectorAll(".scroll-cue").forEach(function (cue) {
    cue.addEventListener("click", function () {
      document.getElementById(cue.dataset.target).scrollIntoView({ behavior: "smooth" });
    });
  });

  var root = document.documentElement;
  var themeToggle = document.querySelector(".theme-toggle");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.textContent = theme === "light" ? "\u263E Dark mode" : "\u2600\uFE0E Light mode";
  }

  applyTheme(root.dataset.theme);
  themeToggle.addEventListener("click", function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  load("publications.html", "publications-container");
  load("talks.html", "talks-container");
})();

// Called by the "Abstract" links in publications.html.
function toggleblock(blockId) {
  var block = document.getElementById(blockId);
  block.style.display = block.style.display === "none" ? "block" : "none";
}
