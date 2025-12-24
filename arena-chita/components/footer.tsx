import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-20 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/images/arena-logo-4.png" alt="ТЦ Арена" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Современный торговый центр в Северном микрорайоне Читы. Более 40 магазинов для всей семьи.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#catalog" className="text-sm text-muted-foreground hover:text-foreground">
                  Каталог магазинов
                </Link>
              </li>
              <li>
                <Link href="#floors" className="text-sm text-muted-foreground hover:text-foreground">
                  Этажи
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-sm text-muted-foreground hover:text-foreground">
                  Как добраться
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">г. Чита, ул. Красной Звезды, 70</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+73022210777" className="text-sm text-muted-foreground hover:text-foreground">
                  +7 (3022) 21-07-77
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+79145256777" className="text-sm text-muted-foreground hover:text-foreground">
                  +7 (914) 525-67-77
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">10:00 — 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ТЦ «Арена»</p>
        </div>
      </div>
    </footer>
  )
}
