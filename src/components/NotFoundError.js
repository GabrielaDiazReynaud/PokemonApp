import "../styles/errors.css";
function NotFoundError() {
  return (
    <div className="error-container">
      <div className="error">
        <p>4</p>
        <img className="error-img" src="/assets/images/404.webp" alt="error" />
        <p>4</p>
      </div>
      <p className="error-title">Pokemon Not Found</p>
    </div>
  );
}
export default NotFoundError;
