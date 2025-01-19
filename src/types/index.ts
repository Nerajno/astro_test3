export interface SpeakingEvent {
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

  export interface ProcessedEvent extends SpeakingEvent {
    status: 'upcoming' | 'past';
  }
