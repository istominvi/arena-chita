import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Phone } from "lucide-react"
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
  const { name, category, floor, description, isAnchor, phone, website } = tenant

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
        </div>
        <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">{name}</h3>
        {isAnchor && <p className="mb-2 text-xs font-medium text-primary">Рекомендуем</p>}
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-5 pb-5 pt-0 text-sm text-muted-foreground">
        <span>{getFloorLabel(floor)}</span>
        <div className="flex items-center gap-3">
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary"
              title="Перейти на сайт"
            >
              <Globe className="h-3.5 w-3.5" />
            </a>
          )}
          {phone && (
            <div className="flex items-center gap-1.5" title="Телефон">
              <Phone className="h-3.5 w-3.5" />
              <span>{phone}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
