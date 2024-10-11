

document.addEventListener("DOMContentLoaded", function() {
    let comments = document.querySelectorAll('.comment'); 
    let commentsToShow = 2; 
  
    let loadMoreBtn = document.getElementById('loadMore');
    let seeLessBtn = document.getElementById('seeLess'); 

    seeLessBtn.style.display = "none";

    if (comments.length <= commentsToShow) {
        loadMoreBtn.style.display = "none";
    }

    for (let i = commentsToShow; i < comments.length; i++) {
        comments[i].style.display = "none";
    }

    // Load More button functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            let hiddenComments = Array.from(comments).filter(function(comment) {
                return comment.style.display === "none";
            });

            for (let i = 0; i < commentsToShow && i < hiddenComments.length; i++) {
                hiddenComments[i].style.display = "block"; 
            }

            let remainingHiddenComments = Array.from(comments).filter(function(comment) {
                return comment.style.display === "none";
            });

            if (remainingHiddenComments.length === 0) {
                loadMoreBtn.style.display = "none"; 
            }

            seeLessBtn.style.display = "inline-block";

            // Scroll to the last visible comment
            if (hiddenComments.length > 0) {
                hiddenComments[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // See Less button functionality
    if (seeLessBtn) {
        seeLessBtn.addEventListener('click', function() {
            
            for (let i = commentsToShow; i < comments.length; i++) {
                comments[i].style.display = "none";
            }

            loadMoreBtn.style.display = "inline-block";

            seeLessBtn.style.display = "none";

            // Scroll back to the first visible comment
            if (comments.length > 0) {
                comments[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});


