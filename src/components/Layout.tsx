import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Rheum Master</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 md:py-8">
        {children}
      </main>

      {/* Bottom Navigation - Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="grid grid-cols-3 h-16">
          <Link
            to="/"
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-colors",
              isActive('/') ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Home size={20} />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/glossary"
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-colors",
              isActive('/glossary') ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <BookOpen size={20} />
            <span className="text-xs">Glossary</span>
          </Link>
          <Link
            to="/settings"
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-colors",
              isActive('/settings') ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Settings size={20} />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-16" />
    </div>
  )
}
