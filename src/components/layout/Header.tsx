import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "@tanstack/react-router";
import { SearchBar } from "@/components/layout/SearchBar";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User, X } from "lucide-react";

const navLinkClass = "transition-colors duration-300";
const navInactive = "text-foreground hover:text-primary";
const navActive =
  "text-primary underline decoration-2 underline-offset-4 sm:underline-offset-8 md:underline-offset-26";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-b border-[#E0DAC8] bg-[#FFF9ECF2] shadow-[0px_1px_2px_0px_#0000000D] backdrop-blur-[12px]">
      <div className="page-x flex flex-wrap items-center gap-2 py-3 sm:gap-3 sm:py-3 md:h-16 md:flex-nowrap md:gap-4 md:py-4">
        {/* Logo + desktop nav */}
        <div className="flex min-w-0 items-center gap-2 lg:gap-6">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="TradeLink logo" className="h-8 w-auto" />
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex items-center gap-4 lg:gap-10">
              <li>
                <Link
                  to="/"
                  activeOptions={{ exact: true }}
                  className={navLinkClass}
                  inactiveProps={{ className: navInactive }}
                  activeProps={{ className: navActive }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={navLinkClass}
                  inactiveProps={{ className: navInactive }}
                  activeProps={{ className: navActive }}
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search — inline from md up */}
        <div className="mx-2 hidden min-w-0 flex-1 md:flex">
          <SearchBar />
        </div>

        {/* Desktop auth + icons */}
        <div className="ml-auto hidden items-center gap-2 sm:flex md:gap-4">
          <div className="hidden items-center gap-1 md:flex">
            <Link to="/login">
              <Button variant="link" className="text-foreground">
                Login
              </Button>
            </Link>
            <span className="text-foreground">|</span>
            <Link to="/signup">
              <Button variant="link" className="text-foreground">
                Signup
              </Button>
            </Link>
          </div>

          <Link to="/cart">
            <Button
              variant="outline"
              size="icon"
              className="relative border-outline-variant text-foreground"
              aria-label="Cart"
            >
              <ShoppingCart className="size-5" />
              <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                3
              </span>
            </Button>
          </Link>

          <Button
            size="icon"
            className="relative border-0 text-foreground"
            aria-label="Account"
          >
            <User className="size-5" />
          </Button>
        </div>

        {/* Mobile actions + burger */}
        <div className="ml-auto flex items-center gap-2 sm:hidden">
          <Link to="/cart">
            <Button
              variant="outline"
              size="icon"
              className="relative border-outline-variant text-foreground"
              aria-label="Cart"
            >
              <ShoppingCart className="size-5" />
              <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                3
              </span>
            </Button>
          </Link>

          <Button
            size="icon"
            variant="outline"
            className="border-outline-variant text-foreground"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {/* Search — full width row between sm and md */}
        <div className="order-last hidden w-full basis-full sm:block md:hidden">
          <SearchBar />
        </div>
      </div>

      {/* Mobile menu — stacked & centered */}
      {menuOpen ? (
        <div className="border-t border-[#E0DAC8] sm:hidden">
          <div className="page-x flex flex-col items-center gap-4 py-6 text-center">
            <div className="w-full max-w-sm">
              <SearchBar />
            </div>
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <Link
                    to="/"
                    activeOptions={{ exact: true }}
                    className={navLinkClass}
                    inactiveProps={{ className: navInactive }}
                    activeProps={{ className: navActive }}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className={navLinkClass}
                    inactiveProps={{ className: navInactive }}
                    activeProps={{ className: navActive }}
                    onClick={closeMenu}
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col items-center gap-2">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="link" className="text-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={closeMenu}>
                <Button variant="link" className="text-foreground">
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
