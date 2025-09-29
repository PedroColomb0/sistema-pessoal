"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Home, Calendar, Utensils, Dumbbell, BookOpen, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cronograma", label: "Cronograma", icon: Calendar },
  { href: "/dieta", label: "Dieta", icon: Utensils },
  { href: "/treino", label: "Treino", icon: Dumbbell },
  { href: "/plano-estudo", label: "Plano de Estudo", icon: BookOpen },
  { href: "/calculadora", label: "Calculadora", icon: Calculator },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-background/80 backdrop-blur-sm border-border shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-72 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-sidebar-foreground">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-sidebar-accent text-sidebar-foreground"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sidebar-accent group ${
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                          : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon
                        className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                          isActive ? "text-sidebar-primary-foreground" : ""
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/60 text-center">Site Pessoal v2.0</div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}