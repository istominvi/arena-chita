"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { FilterBar } from "@/components/filter-bar"
import { TenantCard } from "@/components/tenant-card"
import { Button } from "@/components/ui/button"
import { categories, type Category, type Tenant } from "@/lib/data"

interface TenantCatalogProps {
  tenants: Tenant[]
}

export function TenantCatalog({ tenants }: TenantCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")
  const [selectedFloor, setSelectedFloor] = useState<number | "all">("all")
  const [isExpanded, setIsExpanded] = useState(false)
  const INITIAL_VISIBLE_COUNT = 8 // Показываем 8 магазинов по умолчанию

  const filteredTenants = useMemo(() => {
    return tenants.filter((tenant) => {
      const matchesSearch =
        searchQuery === "" ||
        tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tenant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tenant.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || tenant.category === selectedCategory
      const matchesFloor = selectedFloor === "all" || tenant.floor === selectedFloor

      return matchesSearch && matchesCategory && matchesFloor
    })
  }, [searchQuery, selectedCategory, selectedFloor, tenants])

  const anchorTenants = filteredTenants.filter((t) => t.isAnchor)
  const regularTenants = filteredTenants.filter((t) => !t.isAnchor)
  const sortedTenants = [...anchorTenants, ...regularTenants]

  const visibleTenants = isExpanded ? sortedTenants : sortedTenants.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMoreTenants = sortedTenants.length > INITIAL_VISIBLE_COUNT

  return (
    <section id="catalog" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Каталог магазинов</h2>
          
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск магазина..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedFloor={selectedFloor}
            onFloorChange={setSelectedFloor}
          />
        </div>

        {visibleTenants.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleTenants.map((tenant) => (
              <TenantCard key={tenant.id} tenant={tenant} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">Магазины не найдены</p>
            <p className="text-sm text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {hasMoreTenants && (
          <div className="mt-8 flex flex-col items-center gap-2">
            <Button variant="outline" size="lg" onClick={() => setIsExpanded(!isExpanded)} className="gap-2">
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Свернуть список
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Показать все магазины ({sortedTenants.length})
                </>
              )}
            </Button>
            <span className="text-sm text-muted-foreground">
              Показано {visibleTenants.length} из {sortedTenants.length} магазинов
            </span>
          </div>
        )}

        {!hasMoreTenants && sortedTenants.length > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Показано {sortedTenants.length} из {tenants.length} магазинов
          </div>
        )}
      </div>
    </section>
  )
}
