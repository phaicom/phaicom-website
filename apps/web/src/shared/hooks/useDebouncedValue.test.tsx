import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";

import { useDebouncedValue } from "./useDebouncedValue";

describe("useDebouncedValue", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("returns the latest value only after the delay elapses", () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebouncedValue(value, delay), {
      initialProps: { value: "alpha", delay: 200 },
    });

    rerender({ value: "beta", delay: 200 });

    expect(result.current).toBe("alpha");

    act(() => {
      vi.advanceTimersByTime(199);
    });

    expect(result.current).toBe("alpha");

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(result.current).toBe("beta");
  });

  it("cancels earlier timers when the value changes again before the delay", () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebouncedValue(value, delay), {
      initialProps: { value: "alpha", delay: 200 },
    });

    rerender({ value: "beta", delay: 200 });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    rerender({ value: "gamma", delay: 200 });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe("alpha");

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe("gamma");
  });
});
