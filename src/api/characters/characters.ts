import axios from 'axios';
import { ref, computed } from 'vue';
import type { ApiResponse, Filters, Info, Character } from '@/types';

const characters = ref<Character[]>([]);
const info = ref<Info>({ next: null, prev: null });
const filters = ref<Filters>({ name: '', status: '' });

const apiUrl = computed(() => {
  const params = new URLSearchParams();
  if (filters.value.name) params.append('name', filters.value.name);
  if (filters.value.status) params.append('status', filters.value.status);
  return `https://rickandmortyapi.com/api/character/?${params}`;
});

async function fetchCharacters(url: string): Promise<ApiResponse | undefined> {
  try { 
    const response = await axios.get<ApiResponse>(url);
    characters.value = response.data.results;
    info.value = response.data.info;
    return response.data;
  } catch (error) {
    console.error('Не удалось получить персонажей:', error);
    return undefined;
  }
}

export { characters, filters, info, fetchCharacters, apiUrl };
