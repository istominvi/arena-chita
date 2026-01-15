import Papa from "papaparse"

export type Category =
  | "Fashion"
  | "Kids"
  | "Beauty"
  | "Home"
  | "Tech"
  | "Food"
  | "Services"
  | "Entertainment"
  | "Hobbies"
  | "Pets"
  | "Health"

export type Floor = 0 | 1 | 2 | 3 | 4

export interface Tenant {
  id: string
  name: string
  category: Category
  floor: Floor
  description: string
  tags: string[]
  isAnchor: boolean
  phone?: string
  website?: string
}

export const categories: { value: Category | "all"; label: string; icon: string }[] = [
  { value: "all", label: "Все", icon: "Grid3X3" },
  { value: "Fashion", label: "Одежда", icon: "Shirt" },
  { value: "Kids", label: "Дети", icon: "Baby" },
  { value: "Beauty", label: "Красота", icon: "Sparkles" },
  { value: "Home", label: "Дом", icon: "Home" },
  { value: "Tech", label: "Техника", icon: "Smartphone" },
  { value: "Food", label: "Еда", icon: "UtensilsCrossed" },
  { value: "Services", label: "Услуги", icon: "Wrench" },
  { value: "Entertainment", label: "Развлечения", icon: "Gamepad2" },
  { value: "Hobbies", label: "Хобби", icon: "Palette" },
  { value: "Pets", label: "Питомцы", icon: "PawPrint" },
  { value: "Health", label: "Здоровье", icon: "Pill" },
]

// Map Russian category names to internal Category type
const categoryMap: Record<string, Category> = {
  "Одежда": "Fashion",
  "Дети": "Kids",
  "Красота": "Beauty",
  "Дом": "Home",
  "Техника": "Tech",
  "Еда": "Food",
  "Услуги": "Services",
  "Развлечения": "Entertainment",
  "Хобби": "Hobbies",
  "Питомцы": "Pets",
  "Здоровье": "Health",
}

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3rIZgWrsGgkZzT_RyUI0mFGdEV-YkYvmfjHp5mwjrEtfRQWU0HshoKeECon3jQ_KPd-6JWEj8QsP6/pub?gid=0&single=true&output=csv"

export function parseTenants(data: any[]): Tenant[] {
  return data
    .map((row: any, index: number) => {
      // Map Russian values to internal types
      const categoryRaw = row["Категория"] || "";
      const category = categoryMap[categoryRaw] || "Services"; // Default to Services

      const isAnchorRaw = row["Рекомендуем"] || "";
      const isAnchor =
        String(isAnchorRaw).trim().toLowerCase() === "да" ||
        String(isAnchorRaw).trim().toLowerCase() === "yes" ||
        String(isAnchorRaw).trim().toLowerCase() === "true";

      const floorRaw = row["Этаж"];
      let floor = parseInt(floorRaw, 10);

      // Default to 1 if empty, whitespace, or invalid (NaN)
      // This prevents empty cells ("") from becoming 0 (Basement)
      if (!floorRaw || String(floorRaw).trim() === "" || isNaN(floor)) {
        floor = 1;
      }

      return {
        id: String(index), // Generate ID from index (preserves original row index)
        name: row["Название"] || "",
        category: category,
        floor: floor as Floor,
        description: row["Описание"] || "",
        tags: row["Теги"] ? row["Теги"].split(",").map((t: string) => t.trim()) : [],
        isAnchor: isAnchor,
        phone: row["Телефон"] || undefined,
        website: row["Сайт"] || undefined,
      };
    })
    .filter((tenant) => {
      // Filter out tenants with empty or whitespace-only names
      return tenant.name && tenant.name.trim().length > 0;
    });
}

export async function getTenants(): Promise<Tenant[]> {
  try {
    const response = await fetch(SHEET_URL, { next: { revalidate: 60 } })
    const csvText = await response.text()

    const { data } = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    })

    return parseTenants(data)
  } catch (error) {
    console.error("Error fetching tenants:", error)
    return []
  }
}
