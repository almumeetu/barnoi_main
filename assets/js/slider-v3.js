document.addEventListener("DOMContentLoaded", function () {
    // Slider Data Array
    const sliderData = [
        {
            background: ["assets/img/slider-v3/fashion-shape.png", "assets/img/slider-v3/product-bgg-shape.png"],
            middleBackground: "assets/img/slider-v3/Image.png",
            leftImage: "assets/img/slider-v3/Image.png",
            subTitle: "Our Latest Offerings",
            mainTitle: "Exclusive Series <span>Collection</span>",
            description: "Shop our selection of luxury t-shirts and polo shirts, the ultimate casual garments. We offer exclusive fabrics in cashmere.",
            button1: { text: "Shop Now", link: "#" },
            button2: { text: "How We Work", link: "#" },
            videoIcon: "fa-sharp fa-light fa-circle-play",
            cardImage1: "assets/img/slider-v3/Image (1).png",
            cardImage2: "assets/img/slider-v3/image3.png",
            cardCategory: "Men’s Fashion",
            cardText: "New Polo T-Shirt",
            pagination: { current: "01", total: "03" }
        },
        {
            background: ["assets/img/slider-v3/fashion-shape.png", "assets/img/slider-v3/product-bgg-shape.png"],
            middleBackground: "assets/img/slider-v3/slider-v3-02.png",
            leftImage: "assets/img/slider-v3/slider-v3-02.png",
            subTitle: "Our Latest Offerings",
            mainTitle: "Exclusive Series <span>Collection- 02</span>",
            description: "Shop our selection of luxury t-shirts and polo shirts, the ultimate casual garments. We offer exclusive fabrics in cashmere.",
            button1: { text: "Shop Now", link: "#" },
            button2: { text: "How We Work", link: "#" },
            videoIcon: "fa-sharp fa-light fa-circle-play",
            cardImage1: "assets/img/slider-v3/image3.png",
            cardImage2: "assets/img/slider-v3/Image (1).png",
            cardCategory: "Men’s Fashion",
            cardText: "New Polo T-Shirt",
            pagination: { current: "02", total: "03" }
        },
        {
            background: ["assets/img/slider-v3/fashion-shape.png", "assets/img/slider-v3/product-bgg-shape.png"],
            middleBackground: "assets/img/slider-v3/slider-v3-04.png",
            leftImage: "assets/img/slider-v3/slider-v3-04.png",
            subTitle: "Our Latest Offerings",
            mainTitle: "Exclusive Series <span>Collection -03</span>",
            description: "Shop our selection of luxury t-shirts and polo shirts, the ultimate casual garments. We offer exclusive fabrics in cashmere.",
            button1: { text: "Shop Now", link: "#" },
            button2: { text: "How We Work", link: "#" },
            videoIcon: "fa-sharp fa-light fa-circle-play",
            cardImage1: "assets/img/slider-v3/Image (1).png",
            cardImage2: "assets/img/slider-v3/image3.png",
            cardCategory: "Men’s Fashion",
            cardText: "New Polo T-Shirt",
            pagination: { current: "03", total: "03" }
        }
    ];

    // Get the slider container
    const sliderContainer = document.getElementById("sliderContainer");

    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        const slide = sliderData[currentIndex];

        // Calculate the progress bar width based on the current index
        const progressWidth = ((currentIndex + 1) / sliderData.length) * 100;

        // Create the slider content
        const sliderContent = `
            <div class="slider__main-wrapper d-flex" style="background: url('${slide.background[0]}'), url('${slide.background[1]}');">
                
                <div class="slider__left-image">
                    <img src="${slide.leftImage}" alt="">
                </div>
    
                <div class="slider__middle-wrapper" style="background-image: ${window.innerWidth <= 1199 ? `url('${slide.middleBackground}')` : 'none'};">
                    <div class="section__title">
                        <span class="sub__title">${slide.subTitle}</span>
                        <h2 class="main__title">${slide.mainTitle}</h2>
                        <p>${slide.description}</p>
                        <div class="heroBtn__wrapper d-flex align-items-center">
                            <a href="${slide.button1.link}" class="shop__btn-v3">${slide.button1.text}</a>
                            <a href="${slide.button2.link}" class="simple__button">${slide.button2.text}</a>
                            <a href="#" class="play__btn"><i class="${slide.videoIcon}"></i></a>
                        </div>
                    </div>
    
                    <div class="slider__paginations" style="background: url('assets/img/slider-v3/Shape.png');">
                        <h4><span class="active__pagination">${slide.pagination.current}</span> 
                        <span class="upcomming__pagination">/${slide.pagination.total}</span></h4>
                    </div>
                </div>
    
                <div class="slider__card-wrapper p-relative">
                    <div class="slider__single-card">
                        <div class="card__image">
                            <img src="${slide.cardImage1}" alt="">
                        </div>
                        <div class="card__author text-center">
                            <span>${slide.cardCategory}</span>
                            <p>${slide.cardText}</p>
                        </div>
                    </div>
                    <div class="slider__single-card slider__single-card-2 p-absolute">
                        <div class="card__image">
                            <img src="${slide.cardImage2}" alt="">
                        </div>
                        <div class="card__author text-center">
                            <span>${slide.cardCategory}</span>
                            <p>${slide.cardText}</p>
                        </div>
                    </div>
    
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${progressWidth}%;"></div>
                    </div>
                </div>
            </div>
        `;

        // Add fade-out transition before updating the slider
        sliderContainer.style.opacity = 0;
        setTimeout(() => {
            sliderContainer.innerHTML = sliderContent;
            sliderContainer.style.opacity = 1; // Fade in the new content
        }, 300); // Match this duration with the CSS transition duration

        // Add click event listener to the pagination element
        const paginationElement = sliderContainer.querySelector('.slider__paginations');
        if (paginationElement) {
            paginationElement.addEventListener('click', () => {
                // Pause auto-slide
                clearInterval(autoSlideInterval);

                // Move to the next slide
                currentIndex = (currentIndex + 1) % sliderData.length;
                updateSlider();

                // Restart auto-slide after 2 seconds
                autoSlideInterval = setInterval(updateSlider, 2000);
            });
        }
    }

    // Function to start autoplay
    function startAutoPlay() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderData.length;
            updateSlider();
        }, 2000);
    }

    // Initial load
    updateSlider();

    // Start autoplay
    startAutoPlay();

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
});