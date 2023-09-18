"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib";
import {
  CheckListIcon,
  IdentificationIcon,
  PhotoIcon,
  SettingsIcon,
  UserIcon,
} from "../icons";

const monserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    href: "/roles",
    label: "Roles",
    icon: IdentificationIcon,
    color: "",
  },
  {
    href: "/users",
    label: "Usuarios",
    icon: UserIcon,
    color: "",
  },
  {
    href: "/products",
    label: "Productos",
    icon: PhotoIcon,
    color: "",
  },
  {
    href: "/work",
    label: "Registro de tiempo",
    icon: CheckListIcon,
    color: "",
  },
  {
    href: "/settings",
    label: "Configuraciones",
    icon: SettingsIcon,
    color: "",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-3 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="realtive w-8 h-8 mr-4">
            {/* <Image fill alt="logo" src="/vercel.svg" /> */}
          </div>
          <h1 className={cn(`text-2xl font-bold`, monserrat.className)}>
            369 App
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
