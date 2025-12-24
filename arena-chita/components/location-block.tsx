import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Bus, Clock, Navigation } from "lucide-react"

export function LocationBlock() {
  return (
    <section id="location" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Как добраться</h2>
          <p className="text-muted-foreground">ТЦ «Арена» расположен в Северном микрорайоне, рядом с мкр. Царский</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border h-full min-h-[500px] lg:min-h-0">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=113.486597%2C52.077313&mode=poi&poi%5Bpoint%5D=113.481900%2C52.076984&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1360526967&utm_source=share&z=16"
              width="100%"
              height="100%"
              className="min-h-[500px] lg:min-h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта расположения ТЦ Арена"
            />
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Адрес</h3>
                  <p className="text-sm text-muted-foreground">г. Чита, ул. Красной Звезды, 70</p>
                  <p className="text-sm text-muted-foreground">Северный микрорайон, рядом с мкр. Царский</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Часы работы</h3>
                  <p className="text-sm text-muted-foreground">Ежедневно: 10:00 — 20:00</p>
                  <p className="text-sm text-muted-foreground">Фудкорт: 10:00 — 22:00</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">На автомобиле</h3>
                  <p className="text-sm text-muted-foreground">
                    Бесплатная парковка на 200 мест. Два въезда с улицы Красной Звезды.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Общественный транспорт</h3>
                  <p className="text-sm text-muted-foreground">Остановка «ТЦ Арена». Маршруты: 5, 12, 17, 25.</p>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg" asChild>
              <a
                href="https://yandex.ru/maps/68/chita/?from=mapframe&ll=113.481907%2C52.076974&mode=routes&rtext=~52.076974%2C113.481907&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1360526967&z=14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Построить маршрут
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
