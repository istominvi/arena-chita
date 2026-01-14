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

const SHEET_URL = "REPLACE_WITH_YOUR_GOOGLE_SHEET_CSV_URL"

export async function getTenants(): Promise<Tenant[]> {
  if (SHEET_URL === "REPLACE_WITH_YOUR_GOOGLE_SHEET_CSV_URL") {
    console.warn("SHEET_URL is not set. Returning empty tenants list.")
    return []
  }

  try {
    const res = await fetch(SHEET_URL, { cache: "no-store" })
    const csvText = await res.text()

    const { data } = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    })

    return data.map((row: any) => ({
      id: row.id,
      name: row.name,
      category: row.category as Category,
      floor: parseInt(row.floor, 10) as Floor,
      description: row.description,
      tags: row.tags ? row.tags.split(",").map((t: string) => t.trim()) : [],
      isAnchor: row.isAnchor === "TRUE" || row.isAnchor === "true",
      phone: row.phone || undefined,
    }))
  } catch (error) {
    console.error("Failed to fetch tenants:", error)
    return []
  }
}
