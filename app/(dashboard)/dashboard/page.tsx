import { SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="flex justify-between gap-4 w-full">
      <SidebarGroup className="bg-sidebar-primary max-h-fit max-w-60">
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupAction>
      <Plus /> <span className="sr-only">Add Project</span>
    </SidebarGroupAction>
    <SidebarGroupContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, praesentium.</SidebarGroupContent>
  </SidebarGroup>
<SidebarGroup className="bg-sidebar-primary max-h-fit max-w-60">
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupAction>
      <Plus /> <span className="sr-only">Add Project</span>
    </SidebarGroupAction>
    <SidebarGroupContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, praesentium.</SidebarGroupContent>
  </SidebarGroup>
<SidebarGroup className="bg-sidebar-primary max-h-fit max-w-60">
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupAction>
      <Plus /> <span className="sr-only">Add Project</span>
    </SidebarGroupAction>
    <SidebarGroupContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, praesentium.</SidebarGroupContent>
  </SidebarGroup>
  </section>
  );
}
