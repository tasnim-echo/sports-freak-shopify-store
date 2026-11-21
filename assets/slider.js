document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("[data-testimonials]");

    sections.forEach((section) => {
        const swiper = section.querySelector(".testimonials-swiper");

        new Swiper(swiper, {
            wrapperClass: "swiper-wrapper",
            slideClass: "shopify-block",

            slidesPerView: 3,
            spaceBetween: 24,

            navigation: {
                nextEl: section.querySelector(".testimonials-next"),
                prevEl: section.querySelector(".testimonials-prev"),
            },

            pagination: {
                el: section.querySelector(".testimonials-pagination"),
                clickable: true,
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                990: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    });
});
