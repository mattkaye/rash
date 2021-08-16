import '../scss/components/button.scss';

export const Button = (props) => {
  return (
    <a
      className="button"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.text}
    </a>
  );
};
