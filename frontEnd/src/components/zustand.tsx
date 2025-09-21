import {create} from "zustand"
import {persist} from 'zustand/middleware'

type Product = {
  about?: any;
  store?: any;
  id: number;
  src?: string;
  price?: string;
  name?: string;
  desc?: string;
  rating?: number;
  icon?: React.ElementType;
};

type AppStore = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeCart: (id: number) => void;

  favorite: Record<number, Product>;
  addToFav: (item: Product) => void;
  removeFav: (id: number) => void;

  cartPos?: { x: number; y: number };
  setCartPos?: (pos: { x: number; y: number }) => void;

  theme: "dark" | "light";
  toggleTheme: () => void;
};

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => set((s) => ({ cart: [...s.cart, item] })),
      removeCart: (id) =>
        set((s) => ({ cart: s.cart.filter((i) => i.id !== id) })),

      favorite: {},
      addToFav: (item) =>
        set((s) => ({
          favorite: { ...s.favorite, [item.id]: item },
        })),
      removeFav: (id) =>
        set((s) => {
          const newFav = { ...s.favorite };
          delete newFav[id];
          return { favorite: newFav };
        }),

      cartPos: undefined,
      setCartPos: (pos) => set(() => ({ cartPos: pos })),

      theme: "dark",
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ theme: state.theme, favorite: state.favorite }),
    }
  )
);

export default useAppStore
