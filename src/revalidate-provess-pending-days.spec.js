import { describe, expect, test } from 'vitest';
import { getRevalidateProcessPendingDays } from './revalidate-provess-pending-days.js';

describe(getRevalidateProcessPendingDays, () => {
	test('example', () => {
		// prepare
		const input = {};
		const expected = [];

		// act
		const result = getRevalidateProcessPendingDays(input);

		// assert
		expect(result).toStrictEqual(expected);
	});
});
