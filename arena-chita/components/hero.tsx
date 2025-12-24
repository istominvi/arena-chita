import { Button } from "@/components/ui/button"
import { MapPin, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <img
          src="/images/arena-3.jpeg"
          alt="ТЦ Арена - Торговый центр"
          className="mx-auto h-auto w-full max-w-5xl object-contain"
        />
      </div>

      <div className="container relative mx-auto px-4 pb-8 pt-2 md:pb-12 md:pt-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="-mt-6 mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm shadow-lg mt-0">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">г. Чита, ул. Красной Звезды, 70</span>
          </div>

          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Торговый центр
            <span className="block text-primary">«Арена»</span>
          </h1>

          <p className="mb-6 text-pretty text-lg text-muted-foreground md:text-xl">
            Более 40 магазинов на четырёх этажах. Батутный центр ТутБатут, хобби-маркет Чудо-ручки, кафе и многое
            другое. Всё для семьи в одном месте.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#catalog">Смотреть магазины</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#location">Как добраться</a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { number: "50+", label: "Магазинов" },
              { number: "4", label: "Этажа" },
              { number: "200", label: "Парковочных мест" },
              { number: "10:00-20:00", label: "Часы работы" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-background p-4">
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#catalog"
            className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-sm">Смотреть каталог</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
