import Sidebar from "./Sidebar";
import Header from "./Header";
import AnimatedBackground from "./AnimatedBackground";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-white">
      <AnimatedBackground />

      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}