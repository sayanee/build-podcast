(function () {

  // go to the root url upon clicking the logo
  document.getElementsByClassName("logo")[0].addEventListener("click",function(){
    window.parent.location.href="/";
  });

  // search input box
  var searchInput = document.getElementById('search');

  if (searchInput !== null) {
    var searchStyle = document.createElement('style');
    searchStyle.setAttribute('id', 'search_style');
    document.head.appendChild(searchStyle);

    searchInput.addEventListener('input', function() {
      if (!this.value) {
        searchStyle.innerHTML = "";
        return;
      }
      searchStyle.innerHTML = ".searchable:not([data-index*=\""
        + this.value.toLowerCase() + "\"]) { display: none; }";
    });
  }

  // responsive video
  $("#video").fitVids();

})();
