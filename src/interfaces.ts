export interface IMoodOptions {
  emoji: string;
  description: string;
}

export interface ImoodOptionWithTimetamp {
  mood: IMoodOptions;
  timestamp: number;
}