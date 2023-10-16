/**
 * function `toProperCase()`
 * @param str string which needs to be converted to proper case
 * @returns A string in proper case
 */
export function toProperCase(str: string): String {
    // 
    try {
        // if no string passed or an invalid string passed then throw an error as "No Data"
        if (!str) throw new Error("No Data");
        /** 
         * convert each word in string to proper case
         * convert given string into an array of strings if words are seperated by " " <space>
         * example -> "harry potter" = ["harry", "potter"]
         */
        return str.split(" ").map((word) => {
            // for each word in array convert the first letter to uppercase. 
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ") // merge this converted array of strings into single string  seperated by " " <space>
    } catch (error: any) {
        /**
         * if any error occur then return str arg as it is 
         * if str arg is invalid
         * the return error message
         */
        return str ?? error?.message;
    }
}