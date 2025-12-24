import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TenantCatalog } from "@/components/tenant-catalog"
import { FloorGuide } from "@/components/floor-guide"
import { LocationBlock } from "@/components/location-block"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TenantCatalog />
        <FloorGuide />
        <LocationBlock />
      </main>
      <Footer />
    </div>
  )
}
