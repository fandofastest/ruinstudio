import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
        <p className="text-slate-300 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold hover:from-amber-400 hover:to-amber-500 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
