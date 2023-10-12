/**
 * Generates a CSS class name based on the provided parameters.
 *
 * @param {string} baseClass - The default CSS class.
 * @param {string} additionalClass - The additional CSS class to append or replace the default class.
 * @param {boolean} appendToBaseClass - Determines whether to append the additional class to the default class.
 * @returns {string} The generated CSS class name.
 */
function generateClassName(baseClass: string, additionalClass: string, appendToBaseClass: boolean): string {
    // If appendToBaseClass is true, append the additional class to the base class. 
    // Otherwise, use the additional class as the new class.
    return appendToBaseClass ? `${baseClass} ${additionalClass}` : additionalClass;
}

export default generateClassName;