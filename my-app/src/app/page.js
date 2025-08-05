import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🔐 Password Manager</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <PasswordForm />
        <PasswordList />
      </div>
    </main>
  );
}