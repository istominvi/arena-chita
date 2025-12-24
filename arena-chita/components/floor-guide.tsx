import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Gamepad2, Shirt, Archive } from "lucide-react"

const floors = [
  {
    number: 0,
    title: "Цокольный этаж",
    subtitle: "Товары для дома",
    description: "Гипермаркет товаров для дома, сада и огорода, двери.",
    icon: Archive,
    highlights: ["Всё для дома", "Statusdoor"],
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    number: 1,
    title: "Первый этаж",
    subtitle: "Трафик и повседневный спрос",
    description: "Зона быстрого доступа: товары первой необходимости, аптека, продукты, цветы.",
    icon: ShoppingBag,
    highlights: ["Аптечный склад", "KDV Candyland", "Kris Flowers", "Бетховен"],
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    number: 2,
    title: "Второй этаж",
    subtitle: "Семья, лайфстайл и дети",
    description: "Зона длительного пребывания: одежда, обувь, товары для детей, хобби.",
    icon: Heart,
    highlights: ["ТутБатут", "ПродаЛитЪ", "Легополис", "Kotori"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    number: 3,
    title: "Третий этаж",
    subtitle: "Творчество и услуги",
    description: "Зона творчества: товары для рукоделия, одежда, салоны красоты, кафе.",
    icon: Gamepad2,
    highlights: ["Чудо-ручки", "Джем", "Di Lusso", "Точка Красоты"],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    number: 4,
    title: "Четвёртый этаж",
    subtitle: "Дискаунтер",
    description: "Магазин одежды и обуви по выгодным ценам.",
    icon: Shirt,
    highlights: ["Лидер"],
    color: "bg-purple-500/10 text-purple-600",
  },
]

export function FloorGuide() {
  return (
    <section id="floors" className="scroll-mt-20 bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Навигация по этажам</h2>
          <p className="text-muted-foreground">Пять этажей, каждый со своей атмосферой и назначением</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {floors.map((floor) => {
            const IconComponent = floor.icon
            return (
              <Card key={floor.number} className="relative overflow-hidden">
                <div className="absolute right-4 top-4 text-6xl font-bold text-muted/20">
                  {floor.number === 0 ? "0" : floor.number}
                </div>
                <CardHeader className="pb-2">
                  <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${floor.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{floor.title}</CardTitle>
                  <p className="text-sm font-medium text-primary">{floor.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs text-muted-foreground">{floor.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {floor.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
