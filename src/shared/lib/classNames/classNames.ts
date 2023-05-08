
type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ')
}

// classNames('remove-btn', {hover: true, selected: true, red: false},['with_padding'] ) ==>
// 'remove-btn hover selected with_padding'
