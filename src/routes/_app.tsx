import { Header } from "@/components/layout/Header";
import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <Header/>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
