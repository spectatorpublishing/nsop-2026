import type { Route } from "./+types/articles";
import { useParams } from "react-router";

import ArticleCard from "../components/articleCard";
import { articlesBySection } from "../data/articlesIndex";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "description", content: "Latest articles" },
  ];
}

export default function Articles() {
  const { section } = useParams();
  const list =
    section && section in articlesBySection ? articlesBySection[section] : [];
  const isCrosswordsSingle = section === "crosswords" && list.length === 1;

  return (
    <main>
      <ul className={isCrosswordsSingle ? "articles-grid articles-grid--single" : "articles-grid"}>
        {list.map((a, i) => (
          <li key={`${a.article_link}-${i}`}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>
    </main>
  );
}