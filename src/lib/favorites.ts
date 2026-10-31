"use client";

import { useState, useEffect } from "react";

const FAVORITES_KEY = "loo2taa_favorites";

export function getStoredFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavoriteId(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = getStoredFavorites();
    let updated: string[];
    let isNowFav = false;
    if (current.includes(id)) {
      updated = current.filter(x => x !== id);
      isNowFav = false;
    } else {
      updated = [...current, id];
      isNowFav = true;
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("loo2taa_fav_change"));
    return isNowFav;
  } catch {
    return false;
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavorites(getStoredFavorites());

    const handleUpdate = () => {
      setFavorites(getStoredFavorites());
    };

    window.addEventListener("loo2taa_fav_change", handleUpdate);
    return () => window.removeEventListener("loo2taa_fav_change", handleUpdate);
  }, []);

  return {
    favorites,
    isFavorite: (id: string) => favorites.includes(id),
    toggle: (id: string) => toggleFavoriteId(id),
    count: favorites.length,
    mounted
  };
}
