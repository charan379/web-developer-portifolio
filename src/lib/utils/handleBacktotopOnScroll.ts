export function handleBacktotopOnScroll(backToTopButtonId: string, scrollY: number, className: string) {
    const backToTopButton = document.querySelector(backToTopButtonId);
    if (scrollY > 350) {
        backToTopButton?.classList.add(className);
    } else {
        backToTopButton?.classList.remove(className);
    }
}