const mounthsTabs = document.querySelector(".subscriptions__mounth"),
    months = document.getElementsByName("mount"),
    subscriptionsList = document.querySelectorAll(".subscriptions__list");
function removeSubscriptionsListActive(e, t) {
    e.forEach(e => {
        e.classList.remove(t)
    })
}
const handleMounthsTabsClick = e => {
    removeSubscriptionsListActive(subscriptionsList, "subscriptions__list--active");
    for (var t = 0; t < months.length; t++)
        "radio" == months[t].type && months[t].checked && subscriptionsList[t].classList.add("subscriptions__list--active")
};
$(".subscriptions__mounth").bind("click", handleMounthsTabsClick);
const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: !0,
        loopFillGroupWithBlank: !0,
        navigation: {
            nextEl: ".trainers__slider-control--next",
            prevEl: ".trainers__slider-control--prev"
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4
            }
        }
    }),
    swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 30,
        loop: !0,
        navigation: {
            nextEl: ".reviews__slider-control--next",
            prevEl: ".reviews__slider-control--prev"
        }
    });
