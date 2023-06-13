
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Category from "../Pages/Category/Category";
import Articles from "../Pages/Articles/Articles";
import Settings from "../Pages/Settings/Settings";
import NewsFeed from "../Pages/NewsFeed/NewsFeed";

var PublicRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: `/:category`,
    name: "Category",
    component: Category,
  },
  {
    path: `/articles`,
    name: "Articles",
    component: Articles,
  },
];

var RoutesComponents = [
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    layout: "settings",
  },
  {
    path: `/news-feed`,
    name: "NewsFeed",
    component: NewsFeed,
  },
];

export { RoutesComponents, PublicRoutes };
