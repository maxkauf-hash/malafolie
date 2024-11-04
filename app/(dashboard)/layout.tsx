import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/app-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarTrigger />
      <main className="flex justify-between bg-sidebar-primary-foreground">
        {children}
      </main>
    </SidebarProvider>
  )
}
