/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    let strArr = s.split("");

    for (let i = 0; i < indices.length; i++) {
        let ind = indices[i];
        let src = sources[i];
        let t = targets[i];

        // If src exists from the index ind
        if (s.substring(ind).startsWith(src)) {
            // Replace the source string with the target string
            replaceSrcWithTarget(ind, src, t)
        }
    }

    return strArr.join("");

    function replaceSrcWithTarget(ind, src, t) {
        // Replace directly the src with t
        strArr[ind] = t;
        // Empty the rest of the postion of src
        for (let i = 1; i < src.length; i++) {
            strArr[ind + i] = "";
        }
    }
};