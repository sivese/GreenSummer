export interface MenuItem {
    name: string;
    path: string;
}

export const menuConfig: MenuItem[] = [
    { name: "Home", path: "/"},
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Music", path: "/music" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
];