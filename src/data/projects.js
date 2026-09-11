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
    title: "StayIndia",
    description:
      "A full-featured accommodation and travel platform for browsing properties across India. Users can explore listings, view details, and find the perfect stay for their trips.",
    shortDescription:
      "Accommodation & travel platform for browsing properties across India.",
    image: "", // TODO: e.g. "/projects/stayindia.png"
    technologies: ["React", "JavaScript", "CSS", "REST API"],
    features: [
      "Property listing and browsing",
      "Search and filter functionality",
      "Responsive design for all devices",
      "Dynamic data fetching",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "https://stayindia-zee2.onrender.com",
    githubUrl: "https://github.com/vivekprajapat808-pixel/StayIndia",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description:
      "A YouTube-inspired video browsing application that replicates core YouTube features. Users can search for videos, browse channels, and watch content with a familiar interface.",
    shortDescription:
      "YouTube-inspired application with video browsing functionality.",
    image: "", // TODO: e.g. "/projects/youtube-clone.png"
    technologies: ["React", "Redux", "JavaScript", "REST API", "CSS"],
    features: [
      "Video search and browsing",
      "Channel pages",
      "Responsive video player",
      "API integration with video data",
    ],
    category: ["React", "Redux", "JavaScript"],
    liveUrl: "", // TODO: Add live demo URL
    githubUrl: "", // TODO: Add GitHub repo URL
  },
  {
    id: 3,
    title: "Sai Hydraulics",
    description:
      "A professional business website for Sai Hydraulics, showcasing their services, products, and company information with a clean, modern design.",
    shortDescription: "Professional business website for a hydraulics company.",
    image: "", // TODO: e.g. "/projects/sai-hydraulics.png"
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Company information pages",
      "Product/service showcase",
      "Contact form",
      "Responsive business layout",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "", // TODO: Add live demo URL
    githubUrl: "", // TODO: Add GitHub repo URL
  },
  {
    id: 4,
    title: "BookVerse",
    description:
      "A book discovery and management web application where users can browse, search, and explore books. Features a clean reading-friendly interface.",
    shortDescription: "Book discovery and management web application.",
    image: "", // TODO: e.g. "/projects/bookverse.png"
    technologies: ["React", "JavaScript", "CSS", "REST API"],
    features: [
      "Book browsing and search",
      "Book details and descriptions",
      "Category-based filtering",
      "Responsive reading interface",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "", // TODO: Add live demo URL
    githubUrl: "", // TODO: Add GitHub repo URL
  },
  {
    id: 5,
    title: "Task Manager",
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
    liveUrl: "", // TODO: Add live demo URL
    githubUrl: "", // TODO: Add GitHub repo URL
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "A clean, functional calculator application with standard arithmetic operations. Features a modern UI with keyboard support and calculation history.",
    shortDescription: "Modern calculator with clean UI and keyboard support.",
    image: "", // TODO: e.g. "/projects/calculator.png"
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Standard arithmetic operations",
      "Clean and modern UI",
      "Keyboard support",
      "Responsive design",
    ],
    category: ["React", "JavaScript"],
    liveUrl: "", // TODO: Add live demo URL
    githubUrl: "", // TODO: Add GitHub repo URL
  },
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
