import { useCallback, useState } from "react";

type UseDisclosureOptions = {
  defaultOpen?: boolean;
};

export function useDisclosure({ defaultOpen = false }: UseDisclosureOptions = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle,
  };
}
