document.addEventListener("DOMContentLoaded", function () {
    // Slider Data Array
    const sliderData = [
        {
            background: ["assets/img/slider-v3/fashion-shape.png", "assets/img/slider-v3/product-bgg-shape.png"],
            middleBackground: "assets/img/slider-v3/Image.png", // Add this line
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
            middleBackground: "assets/img/slider-v3/slider-v3-02.png", // Add this line
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
            middleBackground: "assets/img/slider-v3/slider-v3-04.png", // Add this line
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

    function updateSlider() {
        const slide = sliderData[currentIndex];

        sliderContainer.innerHTML = `
            <div class="slider__main-wrapper d-flex" style="background: url('${slide.background[0]}'), url('${slide.background[1]}');">
                
                <div class="slider__left-image">
                    <img src="${slide.leftImage}" alt="">
                </div>

                <div class="slider__middle-wrapper ${window.innerWidth <= 1199 ? 'middle-background-visible' : ''}">
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
                        <div class="progress-bar"></div>
                    </div>
                </div>
            </div>
        `;

        // Move to the next slide
        currentIndex = (currentIndex + 1) % sliderData.length;
    }

    // Initial load
    updateSlider();

    // Automatically change slider content every 3 seconds
    setInterval(updateSlider, 3000);

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
});