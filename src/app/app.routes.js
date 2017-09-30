import AppHomePage from './pages/home-page';
import AppBlogPage from './pages/blog-page';
import AppTabsPage from './pages/tabs-page';
import NotFound from './common/not-found.component';

export default [
  { path: '', component: AppHomePage },
  { path: 'blog', component: AppBlogPage },
  { path: 'tabs', component: AppTabsPage },
  { path: '**', component: NotFound },
];
