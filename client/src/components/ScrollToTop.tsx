import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page when the route changes.
 * This ensures a consistent user experience when navigating between pages.
 * 
 * Usage: Place this component once at the root level of your app (inside Router).
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" for immediate scroll, "smooth" for animated
    });
  }, [location]);

  return null;
}

