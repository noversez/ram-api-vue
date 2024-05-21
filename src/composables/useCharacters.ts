import { fetchCharacters, characters, info, filters } from '@/api/characters/characters';
import { apiUrl } from '@/api/characters/characters';

async function applyFilters() {
  const data = await fetchCharacters(apiUrl.value);
  if (!data) {
    console.log('Не получилось применить фильтр');
  }
}

async function changePage(direction: number) {
  const pageUrl = direction === 1 ? info.value.next : info.value.prev;
  if (pageUrl) {
    const data = await fetchCharacters(pageUrl);
    if (!data) {
      console.log('Не получилось сменить страницу');
    }
  }
}

applyFilters(); // init with load the mp

export { characters, filters, info, applyFilters, changePage };
