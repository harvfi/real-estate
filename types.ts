
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}
