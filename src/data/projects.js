// ============================================================
// PROJECTS DATA
// ============================================================
// Each project object follows this structure. To add a new project,
// simply copy an existing entry and update the fields.
//
// TODO: Add your actual liveUrl and githubUrl for each project.
//       Add project images to /public/projects/ and reference them here.
// ============================================================

const projects = [
  {
    id: 1,
    title: "StayIndia – Hotel Booking Platform",
    description:
      "A fully responsive React frontend for a hotel booking platform, letting users search, view, and book hotel rooms.",
    shortDescription:
      "Hotel Booking Platform with search and book functionalities.",
    image: "", // TODO: e.g. "/projects/stayindia.png"
    technologies: ["React", "CSS", "Axios", "Clerk", "Cloudinary"],
    features: [
      "Responsive React frontend for hotel booking",
      "Clerk authentication and payment flows",
      "REST APIs with Axios for dynamic data",
      "Cloudinary-hosted image rendering",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "https://stayindia-frontend.onrender.com",
    githubUrl: "",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description:
      "Built a frontend clone with video feed, search, playback, suggested videos, and category navigation using a third-party API.",
    shortDescription:
      "YouTube-inspired application with video browsing functionality.",
    image: "", // TODO: e.g. "/projects/youtube-clone.png"
    technologies: ["React", "Context API", "React Router", "Third-Party Video API"],
    features: [
      "Video feed, search, and playback",
      "Third-party API integration for live content",
      "Shimmer loading and error handling",
      "Context API & React Router for state/navigation",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "https://youtube-clone-73b7.onrender.com",
    githubUrl: "https://github.com/vivekprajapat808-pixel/YouTube_Clone",
  },
  {
    id: 3,
    title: "Sai Hydraulics – JCB Spare Parts E-Commerce",
    description:
      "Developed a responsive frontend covering product catalog, categories, cart, wishlist, and orders.",
    shortDescription: "JCB Spare Parts E-Commerce Platform.",
    image: "", // TODO: e.g. "/projects/sai-hydraulics.png"
    technologies: ["React", "CSS", "Axios"],
    features: [
      "Product catalog, cart, and wishlist",
      "REST API integration for authentication and orders",
      "Reusable UI components for listings and filters",
      "Responsive business layout",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "https://sai-hydraluics.onrender.com",
    githubUrl: "https://github.com/vivekprajapat808-pixel/Sai_hydraluics",
  },
  // {
  //   id: 4,
  //   title: "BookVerse",
  //   description:
  //     "A book discovery and management web application where users can browse, search, and explore books. Features a clean reading-friendly interface.",
  //   shortDescription: "Book discovery and management web application.",
  //   image: "", // TODO: e.g. "/projects/bookverse.png"
  //   technologies: ["React", "JavaScript", "CSS", "REST API"],
  //   features: [
  //     "Book browsing and search",
  //     "Book details and descriptions",
  //     "Category-based filtering",
  //     "Responsive reading interface",
  //   ],
  //   category: ["React", "JavaScript"],
  //   liveUrl: "", // TODO: Add live demo URL
  //   githubUrl: "", // TODO: Add GitHub repo URL
  // },
  {
    id: 5,
    title: "TaskFlow",
    description:
      "A task management application for organizing and tracking daily tasks. Supports creating, editing, completing and deleting tasks with a clean, intuitive interface.",
    shortDescription: "Task management app for organizing daily tasks.",
    image: "", // TODO: e.g. "/projects/task-manager.png"
    technologies: ["React", "Redux", "JavaScript", "CSS"],
    features: [
      "Create, edit, and delete tasks",
      "Mark tasks as complete",
      "Task filtering and sorting",
      "Persistent task storage",
    ],
    category: ["React", "Redux", "JavaScript"],
    liveUrl: "https://taskflow-rgqm.onrender.com", // TODO: Add live demo URL
    githubUrl: "https://github.com/vivekprajapat808-pixel/TaskFlow", // TODO: Add GitHub repo URL
  },
  // {
  //   id: 6,
  //   title: "Calculator",
  //   description:
  //     "A clean, functional calculator application with standard arithmetic operations. Features a modern UI with keyboard support and calculation history.",
  //   shortDescription: "Modern calculator with clean UI and keyboard support.",
  //   image: "", // TODO: e.g. "/projects/calculator.png"
  //   technologies: ["React", "JavaScript", "CSS"],
  //   features: [
  //     "Standard arithmetic operations",
  //     "Clean and modern UI",
  //     "Keyboard support",
  //     "Responsive design",
  //   ],
  //   category: ["React", "JavaScript"],
  //   liveUrl: "", // TODO: Add live demo URL
  //   githubUrl: "", // TODO: Add GitHub repo URL
  // },
];

// Filter categories derived from project data
export const filterCategories = [
  "All",
  "React",
  "Redux",
  "JavaScript",
  "REST API",
];

export default projects;
