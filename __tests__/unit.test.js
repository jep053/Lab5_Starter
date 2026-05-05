// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number with area code', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number missing dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});


test('valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email with underscore', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});

test('invalid email missing at symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email missing domain ending', () => {
  expect(isEmail('test@example')).toBe(false);
});


test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('a_bcd123')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});


test('valid date with one digit month and day', () => {
  expect(isDate('1/2/2026')).toBe(true);
});

test('valid date with two digit month and day', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('invalid date with dashes', () => {
  expect(isDate('12-25-2026')).toBe(false);
});

test('invalid date with two digit year', () => {
  expect(isDate('12/25/26')).toBe(false);
});


test('valid 3 character hex color with hashtag', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid 6 character hex color without hashtag', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('invalid hex color with wrong character', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color wrong length', () => {
  expect(isHexColor('#ffff')).toBe(false);
});