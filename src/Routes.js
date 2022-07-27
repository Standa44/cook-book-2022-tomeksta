import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import AddNewRecipePage from './pages/AddNewRecipePage';
import RecipeEditPage from './pages/RecipeEditPage';
import SideDishesPage from './pages/SideDishesPage';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path="/recipe/:slug/upravit" element={<RecipeEditPage />} />
      <Route path="/novy-recept" element={<AddNewRecipePage />} />
      <Route path="/prilohy" element={<SideDishesPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
