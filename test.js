import test from 'ava';
import alfy from 'alfy'
import alfyTest from 'alfy-test';

test(async t => {
	const app = alfyTest();
	const result = await app('vietnamtechblogs');
	const response = await alfy.fetch(`https://www.reddit.com/r/vietnamtechblogs/new.json`);
	t.true(response.data.children[0].data.url === result[0].arg);
});
