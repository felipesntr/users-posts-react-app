// styles
import './styles.scss';

export type Props_t = {
  author: string;
  company: string;
  title: string;
  body: string;
};

export const Card = (props: Props_t) => {
  return (
    <div className="card">
      <div className="card-author">{props.author}</div>
      <div className="card-author-company">{props.company}</div>
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <p>{props.body}</p>
      </div>
    </div>
  );
};
