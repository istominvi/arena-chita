"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#catalog", label: "Магазины" },
  { href: "#floors", label: "Этажи" },
  { href: "#location", label: "Как добраться" },
  { href: "#contacts", label: "Контакты" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/arena-logo-4.png"
              alt="Арена"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>10:00 - 20:00</span>
            </div>
            <Button asChild>
              <a href="tel:+73022210777">
                <Phone className="mr-2 h-4 w-4" />
                Позвонить
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border p-4">
                  <Image
                    src="/images/arena-logo-4.png"
                    alt="Арена"
                    width={100}
                    height={35}
                    className="h-8 w-auto object-contain"
                  />
                </div>

                <nav className="flex flex-col gap-1 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-border p-4">
                  <div className="mb-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>ул. Красной Звезды, 70</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>10:00 - 20:00</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:+73022210777">
                      <Phone className="mr-2 h-4 w-4" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
