

interface SpeakingEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: {
    city: string;
    state: string;
    country: string;
    venue?: string;
  };
  links: {
    video?: string;
    article?: string;
    conferenceWebsite?: string;
    slides?: string;
    github?: string;
  };
  type: 'conference' | 'workshop' | 'meetup' | 'webinar';
  tags?: string[];
}

export const speakingData: SpeakingEvent[] = [
  {
    "id": "dev-summit-2025",
    "title": "Mastering Frontend Performance Optimization",
    "description": "Discover techniques to optimize frontend performance for modern web applications. This session will cover strategies to improve load times, reduce render blocking resources, and utilize caching effectively, ensuring faster, smoother user experiences.",
    "date": "2025-04-05",
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "USA",
      "venue": "Moscone Center"
    },
    "type": "conference",
    "tags": ["frontend", "performance", "web optimization"],
    "links": {
      "conferenceWebsite": "https://2025.dev-summit.com/session/12345",
      "slides": "https://speakerdeck.com/username/frontend-performance",
      "github": "https://github.com/username/frontend-optimization"
    }
  },
  {
    "id": "reactfest-2025",
    "title": "Building Scalable Applications with React and TypeScript",
    "description": "Join us to learn best practices for building scalable and maintainable applications using React and TypeScript. This talk will focus on type safety, architectural patterns, and tools that enhance development speed and reliability.",
    "date": "2025-04-10",
    "location": {
      "city": "New York",
      "state": "NY",
      "country": "USA",
      "venue": "Jacob K. Javits Convention Center"
    },
    "type": "conference",
    "tags": ["react", "typescript", "scalability"],
    "links": {
      "conferenceWebsite": "https://2025.reactfest.com/session/78910",
      "slides": "https://speakerdeck.com/username/react-typescript",
      "github": "https://github.com/username/react-ts-guide"
    }
  },
  {
    id: "connecttech-2024",
    title: "How to Conference: A User Guide",
    description: `Tech conferences can feel overwhelming for introverts, but they're essential
      for career growth and skill development. Learn practical strategies for navigating
      professional events, from preparing effectively to maximizing networking opportunities
      while maintaining your energy levels.`,
    date: "2024-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["soft skills", "career development", "networking"],
    links: {
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide"
    }
  },
  {
    id: "connecttech-2023",
    title: "How to Conference: A User Guide Other",
    description: `Tech conferences can feel overwhelming for introverts, but they're essential
      for career growth and skill development. Learn practical strategies for navigating
      professional events, from preparing effectively to maximizing networking opportunities
      while maintaining your energy levels.`,
    date: "2023-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["soft skills", "career development", "networking"],
    links: {
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide"
    }
  },
];
