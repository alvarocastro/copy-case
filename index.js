/**
 * Copy the case of a string into another.
 * @param {string} target String to change the case.
 * @param {string} source Source of case pattern.
 * @return {string} Converted string.
 */
const copyCase = function (target, source) {
	const result = target.split('').map((char, i) => {
		if (i >= source.length) {
			return char;
		}

		if (source[i] === source[i].toUpperCase()) {
			return char.toUpperCase();
		}

		return char.toLowerCase();
	});

	return result.join('');
};

module.exports = copyCase;
