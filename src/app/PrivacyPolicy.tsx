import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <Link
            to="/"
            className="text-sm text-slate-300 hover:text-amber-400 transition-colors"
          >
            Back to home
          </Link>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            This Privacy Policy explains how Runic Studios Ltd. collects, uses, and
            protects your information.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">Information we collect</h2>
            <p>
              We may collect information you provide via forms (such as name, email,
              and message content) and limited technical data required to operate the
              website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">How we use information</h2>
            <p>
              We use your information to respond to inquiries, provide requested
              services, and improve the site experience.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl text-white font-semibold">Contact</h2>
            <p>
              If you have questions about this policy, contact us using the form on
              the website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
