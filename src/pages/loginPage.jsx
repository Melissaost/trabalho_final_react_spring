import Login from "../components/login/login";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
