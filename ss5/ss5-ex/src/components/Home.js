import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();
  return (
    <div>
      <h1>Home</h1>
      {state && state.account && <p>Welcome, {state.account.email}! </p>}
    </div>
  );
}

export default Home;
