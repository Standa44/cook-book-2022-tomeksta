import { useState, useEffect } from 'react';
import { Container, Spinner, Alert } from 'reactstrap';
import { api } from '../api';
import BodyHeader from '../components/BodyHeader';
import { RecipesList } from '../components/RecipesList';
import { SearchInput } from '../components/SearchInput';
import { SortValueContext } from '../Contexts/SortValueContext';

export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [select, setSelect] = useState('title_asc');

  useEffect(() => {
    setIsLoading(true);
    api
      .get('recipes')
      .then((response) => setRecipes(response.data), setIsLoading(false))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSearchInputChange = (event) => setSearchValue(event.target.value);
  const filteredRecipes = recipes.filter(({ title }) => {
    const latinizeTitle = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const latinizeSearchValue = searchValue
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    return latinizeTitle.includes(latinizeSearchValue);
  });

  return (
    <Container>
      <SortValueContext.Provider
        value={{ select, setSelect }}
      >
        <BodyHeader recipesAmount={recipes.length} />
        <SearchInput
          className="mb-4"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        {isLoading && <Spinner />}
        {hasError && <Alert color="danger">Vyskytla se chyba</Alert>}
        <RecipesList recipes={filteredRecipes} />
      </SortValueContext.Provider>
    </Container>
  );
}
