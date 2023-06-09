
type Mods = Record<string, boolean | string>

const obj:Mods = {
  hover: true,
  selected: 'true'
}

export function classNames(cls:string, mods: Mods, additional:string[]):string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value])=>Boolean(value))
      .map(([className, value])=>className)
  ].join(' ')

}

// classNames('remove-btn', {hover: true, selected: true, red: false},['with_padding'] ) ==>
// 'remove-btn hover selected with_padding'