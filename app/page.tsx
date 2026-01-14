import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TenantCatalog } from "@/components/tenant-catalog"
import { FloorGuide } from "@/components/floor-guide"
import { LocationBlock } from "@/components/location-block"
import { Footer } from "@/components/footer"
import { getTenants } from "@/lib/data"

export const dynamic = "force-static"

export default async function HomePage() {
  const tenants = await getTenants()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TenantCatalog tenants={tenants} />
        <FloorGuide />
        <LocationBlock />
      </main>
      <Footer />
    </div>
  )
}
