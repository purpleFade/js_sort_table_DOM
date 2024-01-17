document.querySelectorAll("th").forEach(function(e){e.addEventListener("click",function(){var t=e.closest("table").querySelector("tbody"),r=t.querySelectorAll("tr"),n=e.cellIndex,c=e.dataset.order,o=Array.from(r).sort(function(e,t){var r=e.querySelectorAll("td")[n].textContent,o=t.querySelectorAll("td")[n].textContent;return"asc"===c?r>o?1:-1:r<o?1:-1});t.innerHTML="",o.forEach(function(e){return t.appendChild(e)}),e.dataset.order="asc"===c?"desc":"asc"})});//# sourceMappingURL=index.84dca1c9.js.map

//# sourceMappingURL=index.84dca1c9.js.map
