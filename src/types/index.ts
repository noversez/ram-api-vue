export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
  }
  
  export interface Filters {
    name: string;
    status: string;
  }
  
  export interface Info {
    next: string | null;
    prev: string | null;
  }
  
  export interface ApiResponse {
    results: Character[];
    info: Info;
  }