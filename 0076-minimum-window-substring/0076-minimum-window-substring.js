/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const targetChars = {};
    for (const char of t) targetChars[char] = (targetChars[char] || 0) + 1;
    let requiredChars = Object.keys(targetChars).length;
    let left = 0, minWindow = "", minWindowLength = Infinity;

    for (let right = 0; right < s.length; right++) {
        if (targetChars[s[right]] !== undefined && --targetChars[s[right]] === 0) requiredChars--;

        while (requiredChars === 0) {
            if (right - left + 1 < minWindowLength) {
                minWindowLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }
            if (targetChars[s[left]] !== undefined && ++targetChars[s[left]] > 0) requiredChars++;
            left++;
        }
    }

    return minWindow;
};