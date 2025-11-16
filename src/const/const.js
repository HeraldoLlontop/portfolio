export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  nextjs: "nextjs",
  tailwind: "tailwind",
  typeScript: "typeScript",
  git: "git",
  github: "github",
  stripe: "stripe",
  php: "php",
  java: "java",
  laravel: "laravel",
  springBoot: "springBoot",
  angular: "angular",
  bootstrap: "bootstrap",
  postgresql: "postgresql",
  mysql: "mysql",
  sqlServer: "sqlServer",
  bitbucket: "bitbucket",
  dbeaver: "dbeaver",
  nginx: "nginx",
  wordpress: "wordpress",
  digitalOcean: "digitalOcean",
  bash: "bash",
  jwt: "jwt",
  kotlin: "kotlin",
  vue: "vue",
  docker: "docker",
  postman: "postman",
  // Iconos usados en proyectos (mantener para compatibilidad)
  redux: "redux",
  reactQuery: "reactQuery",
  zustand: "zustand",
  shadcn: "shadcn",
  mongodb: "mongodb",
  nodejs: "nodejs",
  // here add more icon keys
};

export const skills = [
  // Lenguajes
  {
    title: "Html",
    icon: IconKeys.html,
    category: "lenguajes",
  },
  {
    title: "Css",
    icon: IconKeys.css,
    category: "lenguajes",
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
    category: "lenguajes",
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
    category: "lenguajes",
  },
  {
    title: "PHP",
    icon: IconKeys.php,
    category: "lenguajes",
  },
  {
    title: "Java",
    icon: IconKeys.java,
    category: "lenguajes",
  },
  {
    title: "Kotlin",
    icon: IconKeys.kotlin,
    category: "lenguajes",
  },
  // Frameworks y Librerías
  {
    title: "React Js",
    icon: IconKeys.react,
    category: "frameworks-librerias",
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
    category: "frameworks-librerias",
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
    category: "frameworks-librerias",
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
    category: "frameworks-librerias",
  },
  {
    title: "Laravel",
    icon: IconKeys.laravel,
    category: "frameworks-librerias",
  },
  {
    title: "Spring Boot",
    icon: IconKeys.springBoot,
    category: "frameworks-librerias",
  },
  {
    title: "Angular",
    icon: IconKeys.angular,
    category: "frameworks-librerias",
  },
  {
    title: "Bootstrap",
    icon: IconKeys.bootstrap,
    category: "frameworks-librerias",
  },
  {
    title: "Vue.js",
    icon: IconKeys.vue,
    category: "frameworks-librerias",
  },
  // Herramientas
  {
    title: "Git",
    icon: IconKeys.git,
    category: "herramientas",
  },
  {
    title: "Github",
    icon: IconKeys.github,
    category: "herramientas",
  },
  {
    title: "Bitbucket",
    icon: IconKeys.bitbucket,
    category: "herramientas",
  },
  {
    title: "DBeaver",
    icon: IconKeys.dbeaver,
    category: "herramientas",
  },
  {
    title: "Bash",
    icon: IconKeys.bash,
    category: "herramientas",
  },
  {
    title: "Nginx",
    icon: IconKeys.nginx,
    category: "herramientas",
  },
  {
    title: "DigitalOcean",
    icon: IconKeys.digitalOcean,
    category: "herramientas",
  },
  {
    title: "WordPress",
    icon: IconKeys.wordpress,
    category: "herramientas",
  },
  {
    title: "JWT Token",
    icon: IconKeys.jwt,
    category: "herramientas",
  },
  {
    title: "Docker",
    icon: IconKeys.docker,
    category: "herramientas",
  },
  {
    title: "Postman",
    icon: IconKeys.postman,
    category: "herramientas",
  },
  // Bases de datos
  {
    title: "PostgreSQL",
    icon: IconKeys.postgresql,
    category: "bases-datos",
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
    category: "bases-datos",
  },
  {
    title: "SQL Server",
    icon: IconKeys.sqlServer,
    category: "bases-datos",
  },
];

export const studies = [
  {
    title: "I.E.S. República Federal de Alemania",
    corporation: "Arquitectura de Plataformas y Servicios de Tecnologías de la Información",
    date: "04/2021 – 12/2023",
  },
  {
    title: "I.E.S. República Federal de Alemania",
    corporation: "Gestión de procesos empresariales basado en Java con Spring Boot",
    date: "01/2024 – 04/2024",
  },
];

export const experience = [
  {
    title: "Freelancer | Eléctrica Electrónica",
    position: "Desarrollo Web",
    date: "2025",
    description: "Landing page de servicios eléctricos para presencia digital. Diseño moderno y responsive con Next.js y Tailwind CSS, optimizado para conversión y experiencia de usuario.",
    technologies: [IconKeys.nextjs, IconKeys.tailwind, IconKeys.typeScript, IconKeys.react],
    modality: "Remoto",
    images: [
      "/img/electrica-electronica/electrica-electronica1.webp"
    ]
  },
  {
    title: "Freelancer | Panificadora C&V",
    position: "Desarrollo Web Full Stack",
    date: "2025",
    description: "Sistema de Gestión de Insumos y Producción con Spring Boot, Angular y PostgreSQL. Incluye autenticación JWT, gestión de recetas, control de stock automático y exportación a Excel.",
    technologies: [IconKeys.springBoot, IconKeys.angular, IconKeys.postgresql, IconKeys.typeScript, IconKeys.java, IconKeys.jwt, IconKeys.bootstrap],
    modality: "Remoto",
    images: [
      "/img/panificadora-cv/panificadora-cv1.webp"
    ]
  },
  {
    title: "INGYTAL | Ingenio & Talento",
    position: "Desarrollo Web Full Stack",
    date: "2024",
    description: "Sistema de Gestión Secretarial para LavaQuick con Laravel, MySQL y Jetstream. Implementación de seguridad con encriptación de datos, autenticación 2FA y gestión de permisos.",
    technologies: [IconKeys.laravel, IconKeys.php, IconKeys.mysql, IconKeys.tailwind, IconKeys.javaScript, IconKeys.vue],
    modality: "Remoto",
    images: [
      "/img/lavaquick/lavaquick1.webp"
    ]
  },
  {
    title: "Freelancer | DEPROTEC S.A.C.",
    position: "Desarrollador Web Full Stack",
    date: "2024",
    description: "Desarrollo de sitio web dinámico con Laravel Livewire, permitiendo gestión de contenido (títulos, descripciones e imágenes) para usuarios autenticados.",
    technologies: [IconKeys.laravel, IconKeys.php, IconKeys.mysql, IconKeys.javaScript],
    modality: "Remoto",
    images: [
      "/img/deprotec/deprotec1.webp"
    ]
  },
  {
    title: "I.E. Santa Magdalena Sofía",
    position: "Desarrollador de Aplicaciones Web",
    date: "2023",
    description: "Sistema de Gestión de Contenidos (CMS) para Mesa de Partes Virtual con PHP, JavaScript, AdminLTE y MySQL, digitalizando trámites y reduciendo tiempos de respuesta.",
    technologies: [IconKeys.php, IconKeys.javaScript, IconKeys.bootstrap, IconKeys.mysql],
    modality: "Chiclayo",
    images: [
      "/img/simeparsofia/simeparsofia1.webp"
    ]
  },
  {
    title: "INGYTAL | Ingenio & Talento",
    position: "Desarrollo Full Stack | Maquetador WordPress | QA",
    date: "2022 - 2024",
    description: "Dashboard de marketing para Caja Sullana. Desarrollo de sitios WordPress (CyberDriver, TakyaToken, Emotic, etc.). Pruebas unitarias en sistema Spring Boot para VUCE - MINCETUR.",
    technologies: [IconKeys.php, IconKeys.springBoot, IconKeys.wordpress, IconKeys.mysql, IconKeys.java],
    modality: "Chiclayo",
    images: [
      "/img/ingytal/1ingytal.webp"
    ]
  }
];
