import { describe, expect, test } from 'vitest';
import { getRevalidateProcessPendingDays } from './revalidate-provess-pending-days.js';

describe('getRevalidateProcessPendingDays', () => {
  test('Caso 1: revalidateProcessLastExecutionDayOfMonth es menor que mainProcessLastExecutionDayOfMonth y today menos warm-up days es igual a mainProcessLastExecutionDayOfMonth', () => {
    // prepare
    const today = 10;
    const mainProcessLastExecutionDayOfMonth = 8;
    const revalidateProcessLastExecutionDayOfMonth = 4;
	//const input = {today, mainProcessLastExecutionDayOfMonth , revalidateProcessLastExecutionDayOfMonth}
    const expected = [5,6,7,8];

    // act
    const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth , revalidateProcessLastExecutionDayOfMonth);

    // assert
    expect(result).toStrictEqual(expected);
  });

  test('Caso 2: revalidateProcessLastExecutionDayOfMonth es menor que mainProcessLastExecutionDayOfMonth y today menos warm-up days es mayor que mainProcessLastExecutionDayOfMonth', () => {
    // prepare
    const today = 10;
    const mainProcessLastExecutionDayOfMonth = 7;
    const revalidateProcessLastExecutionDayOfMonth = 4;
    const expected = [5, 6, 7];

    // act
    const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth , revalidateProcessLastExecutionDayOfMonth);

    // assert
    expect(result).toStrictEqual(expected);
  });

  test('Caso 3: revalidateProcessLastExecutionDayOfMonth es igual a mainProcessLastExecutionDayOfMonth y today menos warm-up days es mayor que mainProcessLastExecutionDayOfMonth', () => {
    // prepare
    const today = 10;
    const mainProcessLastExecutionDayOfMonth = 7;
    const revalidateProcessLastExecutionDayOfMonth = 7;
    const expected = [];

    // act
    const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth , revalidateProcessLastExecutionDayOfMonth);

    // assert
    expect(result).toStrictEqual(expected);
  });


  // TEST EXTRA para asegurarnos que se cumple Constraint 2
  test('Caso 4: revalidateProcessLastExecutionDayOfMonth es siempre menor o igual que mainProcessLastExecutionDayOfMonth.', () => {
    // prepare
    const today = 10;
    const mainProcessLastExecutionDayOfMonth = 4;
    const revalidateProcessLastExecutionDayOfMonth = 8;
    const expected =  "Invalid input: revalidateProcessLastExecutionDayOfMonth no puede ser mayor que mainProcessLastExecutionDayOfMonth.";

    // act
    const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth , revalidateProcessLastExecutionDayOfMonth);

    // assert
    expect(result).toStrictEqual(expected);
  });

});

