export function handleBacktotopOnScroll(backToTopButtonId: string, scrollY: number) {
    const backToTopButton = document.querySelector(backToTopButtonId);
    if (scrollY > 550) {
        backToTopButton?.classList.add("show");
    } else {
        backToTopButton?.classList.remove("show");
    }
}