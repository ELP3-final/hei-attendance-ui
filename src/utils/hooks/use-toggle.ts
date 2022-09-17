import { useState } from "react"

export const useToggle = (initial: boolean = false): [boolean, (() => void)] => {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(!value);

  return [value, toggle];
}
