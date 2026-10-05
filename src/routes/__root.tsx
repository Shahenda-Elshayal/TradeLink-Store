import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <div>
      <nav className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>zz
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
