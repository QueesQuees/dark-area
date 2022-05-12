import Home from "~/page/Home";
import GameTop from "~/page/GameTop";
import Profile from "~/page/Profile";
import Upload from "~/page/Upload";
import Search from "~/page/Search";
import { HeaderOnly } from "~/components/Layout";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/gametop", component: GameTop },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
