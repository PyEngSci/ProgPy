document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href*="solutions/"]').forEach(function(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});