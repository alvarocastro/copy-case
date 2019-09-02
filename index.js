/**
 * Copy the case of a string into another.
 * @param {string} target String to change the case.
 * @param {string} source Source of case pattern.
 * @return {string} Converted string.
 */
const copyCase = function (target, source) {
	let res = '';

	for (let i = 0; i < target.length; i++) {
		if (i >= source.length) {
			res += target[i];
			continue;
		}

		if (source[i] === source[i].toUpperCase()) {
			res += target[i].toUpperCase();
		} else {
			res += target[i].toLowerCase();
		}
	}

	return res;
};

module.exports = copyCase;
