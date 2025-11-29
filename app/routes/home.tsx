import App from "../app";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Karl.Dev" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

export default function Home() {
  return <App />;
}
