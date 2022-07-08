export interface IMoodOptions {
  emoji: string;
  description: string;
}

export interface IMoodOptionWithTimetamp {
  mood: IMoodOptions;
  timestamp: number;
}
