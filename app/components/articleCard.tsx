import './articleCard.css';

type Article = {
    image_url: string;
    article_title: string;
    article_authors: string;
    article_link: string;
  };

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
        href={article.article_link}
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
    >
      <div className="image-box">
        <img className="image" src={article.image_url} alt="" />
      </div>
      <div className="content">
        <h2>{article.article_title}</h2>
        <p className="author">By {article.article_authors}</p>
      </div>
    </a>
  );
}