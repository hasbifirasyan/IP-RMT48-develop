import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Waduch Wadidaw!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Barang siapa yang memaafkan, semoga kuburannya kelak dilapangkan.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}