import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {
  const shortenedTitle= title.slice(0,70) ;
  const shortenedSummary= summary.slice(0,100) ;
  const shortenedUsername= author.username.slice(0,30) ;


  return (
    <div className="post" data-aos="fade-down">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{shortenedTitle}</h2>
        </Link>
        <p className="info">
          <p className="author">{shortenedUsername}</p>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{shortenedSummary}</p>
      </div>
    </div>
  );
}