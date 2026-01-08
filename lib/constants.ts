import { NavLink, Service, Project, TeamMember } from "@/types";

export const navLinks: NavLink[] = [
    { label: "Expertise", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
    {
        id: "architecture",
        icon: "apartment",
        title: "Architecture",
        description: "Sustainable structures that blend seamlessly with nature.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh3SfU3D8P6gyX847Yr0V_xb2XActwb2AVd0g0YPAi5H2uLydhW1mHAxU5huy0a0ogGQm7tO0ZlQZA0FtHt39j98cRKHSPkALVOqwL8hhwvl_Qd5guQ24rlhCvh6Rp43Olp6qzH6RXIBp8Z6PF8LBOQ0vZmdQS2Tw4SBt83LNooB0aGPf8OzzhSpYp6RvbeDllhjjIhL4oWICd1yRfhLZeN_ByTc-Gq9KB6vMCYRYKHSnuzQWxx3tOwFdIaOidJbWuizuEfObpXMg",
    },
    {
        id: "landscaping",
        icon: "forest",
        title: "Landscaping",
        description: "Organic outdoor environments tailored specifically to the site.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTVWUhK-HUGQwgQhXiflhl2TDqHp1gx9uci34uj1JZ2uYbCq3y4pXe4W5E-8eFeGrXRB1JpCycNWZcu25bffQ_nX_nbBs17ZDm6aU_dNOvPXd2-ZDITZULNB64tOvEI4R2A5HbUbj61xETMpl9fkmTkwAbAvfqDbNXnUQyuECuxxW56lbqheG0f7cGlxkFFLYj33lSC0_-_tjUaZO6RKG3WyBPmuh4TFRRaw2u3tdOBdgG4YBaUeAFBe9d5W9dg4wwO4MhlHtyGPk",
    },
    {
        id: "interiors",
        icon: "chair",
        title: "Interiors",
        description: "Curated interior spaces defining modern luxury and comfort.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbT0oY8k71qG_C4wQEZAw85HpS8rCPU_li2tp1WW79Zan5VTDR9Vg7hGBnHYb35368vo_YNc2eYkFVvjDSF96oslAucJWpJlEg9z4tEBV7uHV-uUjLQOZoNGulHRA3bBKGOVjKE9w6Ch7sf49cZlcEChNYrNtnl4Iic4YWdtRsiwDd6oEmodkWsJ3RxkYfWQ93BHSOrWs6q-9s1h0JVCk3RM5LLf7GEw5gOYKO84QPqNtKTqnA9swaYW-jtBJD1GcjDYrfXxWufVM",
    },
    {
        id: "turnkey",
        icon: "design_services",
        title: "Turnkey",
        description: "End-to-end execution from blueprint conception to handover.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADffIoQIjyxm7BKEx5ikuSRzFYCLuduChY9obno7QX9AJQhma6eaWqg9CVDS4Q9IaACijq8H3scLeGDjUvaMidld_gaWWLcnLnq77xRRuMUXf8tzD88EQ4Y4jwJ38EzXJkYQJYGmEfkHvFB-yZ8EdUNp-oNsEhENbLJvBupcXqLL_icj0Y_Zg2Zn6Ah_WcamR0M7MUocipDhW1gz80GVepXTL15_I0w5HGFB4kIbtgKp0Tf2uqYYGQnfQBK6_xCV0AEs94_5ZlWuc",
    },
];

export const featuredProjects: Project[] = [
    {
        id: "azure-villa",
        title: "The Azure Villa",
        category: "Residential",
        location: "California, USA",
        year: "2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8tUtRSXMcLpNz6bARJ-gAVQB9IGXK48cMfN5I-q1nLJHsXvrnMn2IXkJxoznUkpC9UAQXR1g_NBN5if4iHWG9xCp0KqzIzrv2gxIe8gSN0Zk1CP7x-EAr7Zb8IVGg65nNFoVKoNCWhepKXPSn49a0Bf74D0qAed54idHg2UcglyfOrB_9W1hNT-iQg_cIOb2hzujhdC716WG0NMRgb3OgSSNFo6rw1_tgi-rZLzEj9i_DNls-M-5qEIlTj-SNrtLOLli1MwqYxvg",
        description: "A minimalist masterpiece perched on the cliffs, featuring panoramic ocean views and seamless indoor-outdoor living spaces.",
        tags: ["Architecture", "Interiors"],
    },
    {
        id: "orka-hq",
        title: "Orka HQ",
        category: "Commercial",
        location: "New York, NY",
        year: "2022",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT09AX6yeEa7Qp88r-QNs3xx0vpWBWLatqubGnJ0nE9pfMYfOOZH5OHIUnbgR2azZyiOLyDIjU_MK9fiFUkweexmRgSiu8TSHCOc-XwgEeSOPNJp6BwI-Yve-Q2ibW44PmUli5SIo-Rkk4Zg5CZyxB9y5i7ghGdS_ZbvbRUm0-FGiWj0lQEtJGFTO1fOFS0XVaeZV96vZhxKv6YbDVSasihEBmJYAmXE6d2XQGD0-E3MoT3UPxU24u8tTGsVz05MMgM64vI3I2ekY",
        description: "A sustainable office complex that redefines workspace dynamics through biophilic design and smart energy systems.",
        tags: ["Turnkey", "Landscape"],
    },
    {
        id: "stone-loft",
        title: "The Stone Loft",
        category: "Interiors",
        location: "London, UK",
        year: "2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO3j6JpC3BzQLY8m6yeN66PTkwSuMrT77mTfyd42XLb_RY547v2Y85tpJdT41mVKJWLgG-OSVxn_bc_DGVVl5FFoFM1RQqvDmb7MmUi44_nZXB36DbTYtXiXJqyCbrRDdDy6T-NVxQdAbDFBRmCatn4GVLKwXGr02tTlLiWy5-FrzEweidAiMMQiEQj3JJBxgehEdrX1ZVZiZiX3DZHqXVOolasmPvybTaqk6vXU1EUvDC0cGJ9UjGigvAHgvry9Y2rxfrDEfBHCg",
        description: "An urban sanctuary focusing on raw materials, natural light, and a muted color palette to create tranquility in the city.",
        tags: ["Interiors", "Styling"],
    },
];

export const allProjects: Project[] = [
    {
        id: "onyx-villa",
        title: "The Onyx Villa",
        category: "Architecture",
        location: "California, USA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzX6ltwlPlC_fdf7bA4v6lSlaA2-9VdmQNjAGPGuXT4n17C_t7oLXyzSLVx4RI9_W1qk8PVYsayjJNmIz_jzjQzXyJMI9LsdKNZEZqKqhIltEaTLNgoBfhJv6n3HFlIJMxkqvV40qAG4bIGBnJtXObtx3IEGF4lV2DPfAK3LdirfYgPIn5KnyXJAvqACUfflckmkTQYJIW_fsEJ8MNWHvZS9Cink1dAZ62dqGWSNJmbrwY2CT2lIRuRHqrBAwOonoUvkgHaB6lxFk",
        description: "Modern concrete villa with large glass windows and pool at dusk",
        tags: ["Architecture"],
    },
    {
        id: "azure-penthouse",
        title: "Azure Penthouse",
        category: "Interiors",
        location: "New York, NY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oJ-WGKhxpymIsez7nU75r5Y-qdPtHZi6Go-wkN9FXA0lQDhqnnDRxOguDYkjcZyXEJyW6CrotE0ItkkZm9LDZ9G6A02oZzbyCj93sCdvgDkpxsdXf4W0l9rqgCCgjSjQxU3gcBV65w2pxM6GqsSbBFLIpX9xBy9uANd6qah1j6RFiWsXP0M0JRnQY5lDTntJ9FVpemmjD-atrykajoXUmNUyfN2bARODgG6wZLcExH_eHon0aGzttK39en3U2A1-gvBn0ZwFhi4",
        description: "Minimalist living room with beige sofa and floor to ceiling windows",
        tags: ["Interiors"],
    },
    {
        id: "serenity-gardens",
        title: "Serenity Gardens",
        category: "Landscaping",
        location: "Kyoto, Japan",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAog0951aLbEsCX1MxNtki2zWeCNtIk8FsEZFEUkAj64LCaxS9Hp2RfAU4iOveb8POY7pFRYhZUb3KNQofQN627C41CkfuwkRje5qlf44G375ibn1X7mk8svLNqTsc9GsZf_RR5MCyurU69Qs6FfeTL457q2dFFeENTeZkSk5kdWx6UTDNecpefnZHwuXfxl5id4b20pTHQQt1_NZ9PKEzZmbZNZnTU4xNGXWNwDVkH4hAxOPf4VVgbFG5gMcMcnptrr26S0a9JFDg",
        description: "Zen garden with carefully raked sand, rocks and bonsai tree",
        tags: ["Landscaping"],
    },
    {
        id: "coastal-retreat",
        title: "Coastal Retreat",
        category: "Turnkey",
        location: "Sydney, Australia",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCalGzWZZ_Fllt72tVRpfIpaIPT8qY1kSi1_fFxmNZyc0PgDEHqltmgyNZnA68CNJNkqemV4-YefVEnvW77RUJTKJ3d3-pekwG9XR-ri0f3ptvxI9uxEKP0hNn1uiWyJwa-YbL3CqeDN3WhtJi4TcJEwkJoJFbIb4IXxwT5nHv014lUFxmkPMFrZNL8BcE6BfMLs6ysehqdC-Acu9vt8vQPewahQcZ6G_0HOQR7oHXn4xtlZ1J3WZ3wC209zd2X1f4erRidG_D-JP8",
        description: "White modern geometric house facade against blue sky",
        tags: ["Turnkey"],
    },
    {
        id: "nordic-loft",
        title: "Nordic Loft",
        category: "Interiors",
        location: "Oslo, Norway",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDAoKF6tZUGNA6EmOH6ZOrqPwAzOjDeYzxog8rPodeppuF_Q-yFVm4UVNPaIIkZaKHKRsvLKi1mT7hXlg9GkqATxZMdJwWa5L6DAEQ_L2l2d4904C7HH2dzcfFaHpLVwGVjcRYg6uFOHHC4Kxk_KsphHZSXSbj2WB0fEMclo1CxWsm6fcIvFwTcqPF54OVUINtyIvU1Vlj3oRLRZsrZez3zmWWdMo7FlilMkQCYDK8SlxzU7ey2wp1xA9KGdiRme4t2s7b3Svi9Cg",
        description: "Interior of a modern scandinavian style bedroom with wood paneling",
        tags: ["Interiors"],
    },
    {
        id: "helix-tower",
        title: "Helix Tower",
        category: "Architecture",
        location: "Dubai, UAE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6QZKVE8HZ2f8h-ijxWm2xPHaOfoo3sfpfJ0QGtlFwCGyroIngMNXNsSBcPXGqtz0eRCJwX4Ya_V93TfIWvFPUhdORhlQsyM9RXg2iUZx40K8x4b6r6MOeeUTsFMtdlbcQc9tdkTaE1q5-vDeeOr9iE_PwtaQOVUPl9KmyOWqIyDcED_ba8hWiJKfjqCJPPIRPRUYnewc1Hq1M7wAjKCCOhOL15y90xoJqfqpAnVBL4ux_AA8Db0zujpY8t8BgXvsV6HtbRZpbQoY",
        description: "View looking up at a modern glass skyscraper with geometric patterns",
        tags: ["Architecture"],
    },
    {
        id: "urban-kitchen",
        title: "Urban Kitchen",
        category: "Turnkey",
        location: "London, UK",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp_DRBSUI2BkvFHfovrbrREYLyU5GgX_F2h5R4AlWlmPrA0SPbdO0jEU2OgokGIG2O496b7NhNEsT2kQlXenpqXnKl0i-hhYg3_ohN2cQ8_NKqrnws56TbDzFq5onFydwej8KPsjCRE21UG0l5pbXruZT0hDYu4CAAaFP4_7rilmrsPq3GCWL1O9mnd9iOneBp7YjMXKZWUVgEi_kLQXKK2k_Nzmt3Wjo3swhudq_l2j58rugrPC9kqdPsmRlywH4DeibJiFutqPM",
        description: "Modern kitchen with marble island and dark wood cabinetry",
        tags: ["Turnkey"],
    },
];

export const teamMembers: TeamMember[] = [
    {
        id: "srishti-singh",
        name: "Ar. Srishti Singh",
        role: "Principal Architect",
        image: "/assets/srishti.PNG",
        quote: "Design is intelligence made visible.",
    },
];
