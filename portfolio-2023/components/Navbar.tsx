"use client" // this is a client component
import React from "react"
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation"

interface NavItem {
    label: string
    page: string
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
  ]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = React.useState(false);
    return (
        <header>
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div>
                        <h2>Timothy Nguyen</h2>
                    </div>
                </div>
                <div>
                {NAV_ITEMS.map((item, idx) => {
                    return <a key={idx}>{item.label}</a>
                })}
                </div>
            </div>
        </header>
    )
}

export default Navbar;