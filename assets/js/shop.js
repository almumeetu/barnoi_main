  //shopcard
  document.getElementById('min-range').addEventListener('input', function() {
    document.getElementById('price-min').innerText = this.value;
    });
  
  //cart 
  document.addEventListener("DOMContentLoaded", function () {
      const categories = document.querySelectorAll(".form__check-wrapper");
      const toggleBtn = document.getElementById("toggleBtn");
      let visibleCount = 7; 
  
      if (categories.length <= 7) {
          toggleBtn.style.display = "none";  
          return;  
      }
  
      function updateCategories() {
          categories.forEach((category, index) => {
              if (index < visibleCount) {
                  category.style.display = "flex";  
              } else {
                  category.style.display = "none";  
              }
          });
  
          if (visibleCount >= categories.length) {
              toggleBtn.textContent = "See Less";
          } else {
              toggleBtn.textContent = "See More";
          }
      }
  
      updateCategories();
  
      toggleBtn.addEventListener("click", function (e) {
          e.preventDefault();  
  
          if (toggleBtn.textContent === "See More") {
              visibleCount = Math.min(visibleCount + 5, categories.length);  
          } else {
              visibleCount = 7; 
          }
  
          updateCategories();
      });
  });
  
  
  // Pagination
  const pages = document.querySelectorAll('.pagination .page');
  const prevBtn = document.querySelector('.pagination .prev');
  const nextBtn = document.querySelector('.pagination .next');
  
  let currentPage = 0; 
  
  function updateActivePage(newIndex) {
    pages[currentPage].classList.remove('active');
    currentPage = newIndex;
    pages[currentPage].classList.add('active');
  }
  
  pages.forEach((page, index) => {
    page.addEventListener('click', () => {
      updateActivePage(index);
    });
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      updateActivePage(currentPage - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      updateActivePage(currentPage + 1);
    }
  });
  
  // Product details tab JS 
  
  function openDetails(evt, specName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("product__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("product__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(specName).style.display = "block";
    evt.currentTarget.className += " active";
  }



  
 





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  