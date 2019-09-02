const test = require('ava');
const copyCase = require('.');

test('Should work with same length strings', t => {
	t.is(copyCase('ahoy', 'aAAa'), 'aHOy');
	t.is(copyCase('ahoy', 'AaAa'), 'AhOy');
	t.is(copyCase('ahoy', 'aaaa'), 'ahoy');
	t.is(copyCase('ahoy', 'AAAA'), 'AHOY');
	t.is(copyCase('ahoy', 'aaaA'), 'ahoY');
	t.is(copyCase('AhOy', 'aaAA'), 'ahOY');
});

test('Should work with mixed characters', t => {
	t.is(copyCase('4h0y', 'aAAa'), '4H0y');
	t.is(copyCase('tH!5 1s 4m@z!n6', 'AaAaAaAaAaAaAaA'), 'Th!5 1S 4m@z!n6');
});

test('Should return same case when target case is shorter', t => {
	t.is(copyCase('terminaTor', 'aaAA'), 'teRMinaTor');
});

test('Should work when the target case is longer', t => {
	t.is(copyCase('aHoY', 'aaAAaaAaAa'), 'ahOY');
});
