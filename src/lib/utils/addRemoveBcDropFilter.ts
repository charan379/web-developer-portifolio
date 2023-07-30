export function addRemoveBcDropFilter(elementId: string, bcFillter?: string, remove?: boolean): void {
    const element = document.getElementById(elementId);

    if (element && bcFillter) {
        element.style.backdropFilter = bcFillter
    }

    if (element && remove) {
        element.style.removeProperty("backdrop-filter")
    }

    return;
}