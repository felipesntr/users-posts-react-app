import "./styles.scss";
export const Error = ({ message }: { message: string }) => {
  return (
    <div className="error">
      <h1>{message}</h1>
    </div>
  );
};