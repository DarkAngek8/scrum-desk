import Image from "next/image"
import Link from "next/link"
import { Separator } from "./separator"
import { Navigator } from "./navigator"
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigator />
      <Separator className="my-4" />
    </aside>
  );
};