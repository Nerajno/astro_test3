

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
