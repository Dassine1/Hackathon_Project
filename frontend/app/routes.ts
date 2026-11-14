import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),

  route("search", "./routes/searchPage.tsx"),
// todo: if possible, create a page for the description of each repo
//   route("description", "./routes/description.tsx"),

] satisfies RouteConfig;