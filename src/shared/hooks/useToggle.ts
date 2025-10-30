// Simple boolean toggle hook (great for modals, dropdowns, etc.)

import { useCallback, useState } from "react";

export const useToggle = (initial = false) => {

    const [value, setValue] = useState(initial);

    const toggle = useCallback(() => setValue((prev) => !prev),[]);

    return [value, toggle, setValue] as const;
}

// const [isOpen, toggleOpen] = useToggle();