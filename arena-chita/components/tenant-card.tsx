import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import type { Tenant, Category } from "@/lib/data"

const categoryLabels: Record<Category, string> = {
  Fashion: "Одежда",
  Kids: "Дети",
  Beauty: "Красота",
  Home: "Дом",
  Tech: "Техника",
  Food: "Еда",
  Services: "Услуги",
  Entertainment: "Развлечения",
  Hobbies: "Хобби",
  Pets: "Питомцы",
  Health: "Здоровье",
}

interface TenantCardProps {
  tenant: Tenant
}

export function TenantCard({ tenant }: TenantCardProps) {
  const { name, category, floor, rating, description, isAnchor, location } = tenant

  const getFloorLabel = (floor: number) => {
    if (floor === 0) return "Цокольный этаж"
    return `${floor} этаж`
  }

  return (
    <Card
      className={`group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isAnchor ? "border-primary/30 bg-primary/5" : ""
      }`}
    >
      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <Badge variant="secondary" className="text-xs font-normal">
            {categoryLabels[category]}
          </Badge>
          {rating && rating >= 4.5 && (
            <Badge className="flex items-center gap-1 bg-primary text-primary-foreground">
              <Star className="h-3 w-3 fill-current" />
              {rating}
            </Badge>
          )}
        </div>
        <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">{name}</h3>
        {isAnchor && <p className="mb-2 text-xs font-medium text-primary">Рекомендуем</p>}
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location || getFloorLabel(floor)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
