import Image from "next/image"
import Link from "next/link"
import { SeparatorDot } from "./separatorDot"
import { Navigator } from "./navigator"
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <SeparatorDot className="my-4" />
      <WorkspaceSwitcher />
      <SeparatorDot className="my-4" />
      <Navigator />
      <SeparatorDot className="my-4" />
      <Projects />
    </aside>
  );
};