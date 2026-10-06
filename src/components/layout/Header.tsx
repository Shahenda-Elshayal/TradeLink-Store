import logo from "@/assets/logo.svg";
import { Link } from "@tanstack/react-router";
import { SearchBar } from "@/components/layout/SearchBar";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-outline-variant bg-background">
      <div className=" flex h-16 items-center justify-between  gap-4 page-x py-4">
        {/* logo image and  Nav links */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="TradeLink logo" className="h-8 w-auto" />
          <nav>
            <ul className="flex items-center gap-4 md:gap-6 lg:gap-10">
              <li>
                <Link
                  to="/"
                  activeOptions={{ exact: true }}
                  className="transition-colors duration-300"
                  inactiveProps={{
                    className: "text-foreground hover:text-primary",
                  }}
                  activeProps={{
                    className:
                      "text-primary underline decoration-2 underline-offset-26",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors duration-300"
                  inactiveProps={{
                    className: "text-foreground hover:text-primary",
                  }}
                  activeProps={{
                    className:
                      "text-primary underline decoration-2 underline-offset-26",
                  }}
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search bar */}
        <SearchBar />

        {/* login & signup buttons and cart button and user profile button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
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

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="text-foreground border-outline-variant relative"
            >
              <ShoppingCart className="size-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full px-2 py-1 text-xs">
                3
              </span>
            </Button>

            <Button className="text-foreground border-0 relative">
              <User className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
