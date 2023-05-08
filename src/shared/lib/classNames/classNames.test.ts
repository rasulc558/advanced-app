import { classNames } from './classNames'

describe('Class Names', () => {
  test('With one param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('With additional params', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
  })

  test('With mods', () => {
    expect(classNames('someClass', { red: true }, ['class1', 'class2'])).toBe('someClass class1 class2 red')
  })
  test('With mods where one is false', () => {
    expect(classNames('someClass', { red: false, green: true }, ['class1', 'class2'])).toBe('someClass class1 class2 green')
  })

  test('With mods where one is undefined', () => {
    expect(classNames('someClass', { red: undefined, green: true }, ['class1', 'class2'])).toBe('someClass class1 class2 green')
  })
})
