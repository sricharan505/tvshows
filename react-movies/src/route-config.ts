import IndexGenres from "./genres/IndexGenres";
import CreateGenre from './genres/CreateGenre';
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexShowPlatform from "./platforms/IndexShowPlatform";
import CreateShowPlatform from "./platforms/CreateShowPlatform";
import EditShowPlatform from "./platforms/EditShowPlatform";

import CreateShow from "./tvshows/CreateShow";
import EditShow from "./tvshows/EditShow";
import FilterShows from "./tvshows/FilterShow";

import LandingPage from "./tvshows/LandingPage";
import RedirectToLandingPage from './utils/RedirectToLandingPage';

const routes = 
[
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/showplatforms', component: IndexShowPlatform, exact: true},
    {path: '/showplatform/create', component: CreateShowPlatform},
    {path: '/showplatform/edit/:id(\\d+)', component: EditShowPlatform},

    {path: '/shows/create', component: CreateShow},
    {path: '/shows/edit/:id(\\d+)', component: EditShow},
    {path: '/shows/filter', component: FilterShows},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;