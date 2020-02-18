import { Selector } from 'testcafe';

const searchInput = Selector('input.header-search-input');
const searchResultItems = Selector('li.grid-tile');

const headerLoginLink = Selector('a.user-login');
const loginEmailInput = Selector('input.email-input');
const loginPasswordInput = Selector('input.email-input');
const loginButton = Selector('button.button-login');
const errorText = Selector('div.error-form');

fixture`Columbia`.page`https://www.columbia.com`;

test(`Simple search`, async t => {
	await t.typeText(searchInput, 'black').pressKey('enter');
	await t.expect(searchResultItems.exists).ok();
});

test(`Complex search`, async t => {
	await t.typeText(searchInput, 'dark blue').pressKey('enter');
	await t.expect(searchResultItems.exists).ok();
});

test(`Login - success`, async t => {
	await t.typeText(searchInput, 'dark blue').pressKey('enter');
	await t.expect(searchResultItems.exists).ok();
});

test(`Login - edge`, async t => {
	await t.typeText(searchInput, 'dark blue').pressKey('enter');
	await t.expect(searchResultItems.exists).ok();
});
