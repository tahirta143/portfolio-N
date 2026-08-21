"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    // Disable browser scroll restoration so it doesn't jump to last position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Force scroll to top on every page load / refresh
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
