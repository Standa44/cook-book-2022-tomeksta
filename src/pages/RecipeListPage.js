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
  const latinizeText = (title) => {
    var latinizeTitle = title.toLowerCase();
    latinizeTitle = latinizeTitle.replace(new RegExp('š', 'g'), 's');
    latinizeTitle = latinizeTitle.replace(new RegExp('č', 'g'), 'c');
    latinizeTitle = latinizeTitle.replace(new RegExp('ř', 'g'), 'r');
    latinizeTitle = latinizeTitle.replace(new RegExp('ž', 'g'), 'z');
    latinizeTitle = latinizeTitle.replace(new RegExp('[àá]', 'g'), 'a');
    latinizeTitle = latinizeTitle.replace(new RegExp('[èéě]', 'g'), 'e');
    latinizeTitle = latinizeTitle.replace(new RegExp('[ìí]', 'g'), 'i');
    latinizeTitle = latinizeTitle.replace(new RegExp('[òóö]', 'g'), 'o');
    latinizeTitle = latinizeTitle.replace(new RegExp('[ùúů]', 'g'), 'u');
    latinizeTitle = latinizeTitle.replace(new RegExp('[ýÿ]', 'g'), 'y');
    return latinizeTitle;
  };

  const filteredRecipes = recipes.filter(({ title }) => {
    var latinizeTitle = latinizeText(title).toLowerCase();
    var latinizeSearchValue = latinizeText(searchValue).toLowerCase();
    return latinizeTitle.includes(latinizeSearchValue);
  });

  return (
    <Container>
      <SortValueContext.Provider
        value={{ select, setSelect, searchValue, setSearchValue }}
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
