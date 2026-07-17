(function () {
  "use strict";

  var tabs = Array.prototype.slice.call(document.querySelectorAll("[role='tab'][data-tab-target]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[role='tabpanel'].tab-panel"));

  if (!tabs.length || !panels.length) {
    return;
  }

  var hashToTab = {
    "research-focus-title": "tab-overview",
    "about-me": "tab-overview",
    "publications": "tab-publications",
    "education": "tab-education",
    "professional": "tab-professional",
    "internships": "tab-professional",
    "teaching": "tab-professional",
    "volunteer": "tab-professional",
    "honors-awards": "tab-honors"
  };

  function tabById(id) {
    return document.getElementById(id);
  }

  function activateTab(tab, options) {
    if (!tab) {
      return;
    }

    var settings = options || {};
    var targetId = tab.getAttribute("data-tab-target");

    tabs.forEach(function (item) {
      var isActive = item === tab;
      item.setAttribute("aria-selected", isActive ? "true" : "false");
      item.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    panels.forEach(function (panel) {
      panel.hidden = panel.id !== targetId;
    });

    if (settings.focus) {
      tab.focus();
    }

    if (settings.updateHash) {
      var nextHash = tab.getAttribute("data-tab-hash");
      if (nextHash && window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#" + nextHash);
      }
    }
  }

  function activateForHash(hash) {
    var cleanHash = (hash || "").replace(/^#/, "");
    var tabId = hashToTab[cleanHash];

    if (!tabId) {
      return false;
    }

    activateTab(tabById(tabId), { focus: false, updateHash: false });
    return true;
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      activateTab(tab, { focus: false, updateHash: true });
    });

    tab.addEventListener("keydown", function (event) {
      var nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(tabs[nextIndex], { focus: true, updateHash: true });
    });
  });

  document.querySelectorAll(".masthead a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      activateForHash(link.getAttribute("href"));
    });
  });

  window.addEventListener("hashchange", function () {
    activateForHash(window.location.hash);
  });

  if (!activateForHash(window.location.hash)) {
    activateTab(tabs[0], { focus: false, updateHash: false });
  }

  document.documentElement.classList.add("tabs-ready");
})();
