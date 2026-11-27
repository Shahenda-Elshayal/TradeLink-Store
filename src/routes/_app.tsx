import { Header } from "@/components/layout/Header";
import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <Header/>
      <main className="page-x py-4">
        <Outlet />
      </main>
    </div>
  );
}
