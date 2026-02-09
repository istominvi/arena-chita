"use client"
import { Button } from "@/components/ui/button"
import {
  Grid3X3,
  Shirt,
  Baby,
  Sparkles,
  Home,
  Layers,
  Smartphone,
  UtensilsCrossed,
  Wrench,
  Gamepad2,
  Palette,
  Pill,
  PawPrint,
} from "lucide-react"
import type { Category } from "@/lib/data"

const iconMap = {
  Grid3X3,
  Shirt,
  Baby,
  Sparkles,
  Home,
  Smartphone,
  UtensilsCrossed,
  Wrench,
  Gamepad2,
  Palette,
  Pill,
  PawPrint,
}

interface FilterBarProps {
  categories: { value: Category | "all"; label: string; icon: string }[]
  selectedCategory: Category | "all"
  onCategoryChange: (category: Category | "all") => void
  selectedFloor: number | "all"
  onFloorChange: (floor: number | "all") => void
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedFloor,
  onFloorChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap]
          return (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.value)}
            >
              {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
              {category.label}
            </Button>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedFloor === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onFloorChange("all")}
        >
          <Layers className="mr-2 h-4 w-4" />
          Все этажи
        </Button>
        {[0, 1, 2, 3, 4].map((floor) => (
          <Button
            key={floor}
            variant={selectedFloor === floor ? "default" : "outline"}
            size="sm"
            onClick={() => onFloorChange(floor)}
          >
            {floor === 0 ? "Цокольный" : `${floor} этаж`}
          </Button>
        ))}
      </div>
    </div>
  )
}
