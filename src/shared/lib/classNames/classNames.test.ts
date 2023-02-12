import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true }, []))
      .toBe('someClass hovered scrollable');
  });

  test('with true and false mods', () => {
    expect(classNames('someClass', { hovered: false, scrollable: true }, []))
      .toBe('someClass scrollable');
  });

  test('with true and undefined mods', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      [],
    ))
      .toBe('someClass hovered');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['firstClass', 'secondClass']))
      .toBe('someClass firstClass secondClass');
  });

  test('with mods and additional class', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['firstClass', 'secondClass'],
    ))
      .toBe('someClass firstClass secondClass hovered scrollable');
  });
});
