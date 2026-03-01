import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <Link
            to="/"
            className="text-sm text-slate-300 hover:text-amber-400 transition-colors"
          >
            Back to home
          </Link>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            These Terms of Service govern your access to and use of the Runic Studios
            Ltd. website.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">Acceptable use</h2>
            <p>
              You agree not to misuse the website, attempt unauthorized access, or
              disrupt its operation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">Disclaimer</h2>
            <p>
              The website is provided on an “as-is” basis without warranties of any
              kind to the fullest extent permitted by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">Contact</h2>
            <p>
              Questions about these terms can be sent via the contact form on the
              website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
