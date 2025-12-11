export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    image: string;
    description: string;
    tags: string[];
    year?: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    quote: string;
}

export interface NavLink {
    label: string;
    href: string;
}
