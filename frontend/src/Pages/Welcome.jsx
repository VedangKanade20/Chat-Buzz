import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.08),_transparent_18%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_16%),radial-gradient(circle_at_bottom,_rgba(124,58,237,0.08),_transparent_22%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
              New launch · 5 min setup
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-100/90">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 transition hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="rounded-full bg-cyan-400 px-4 py-2 text-black transition hover:bg-cyan-300"
            >
              Get Started
            </button>
          </div>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center animate-fade-up">
          <div className="space-y-8">
            <div className="max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Real-time, secure, connected
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
                ChatBuzz: Your Ultimate Chat Experience
              </h1>
              <p className="text-lg leading-8 text-cyan-100/85 sm:text-xl">
                Connect with friends and teams through instant messaging, video
                calls, group chats, and secure encryption. Build your contact
                lists and manage conversations effortlessly.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/register")}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Start Chatting
              </button>
              <button
                onClick={() => navigate("/login")}
                className="rounded-full border border-white/20 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-slate-900/90"
              >
                Sign In
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-left shadow-[0_20px_80px_-40px_rgba(6,8,23,0.75)]">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Members
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Custom Lists
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-left shadow-[0_20px_80px_-40px_rgba(6,8,23,0.75)]">
                <p className="text-sm uppercase tracking-[0.35em] text-violet-300">
                  Calls
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Video & Voice
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-left shadow-[0_20px_80px_-40px_rgba(6,8,23,0.75)]">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                  Security
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  E2E Encryption
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative space-y-6">
              <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                Chat Dashboard
              </span>
              <div className="rounded-[1.75rem] bg-[#090b16] p-6 text-cyan-100/90 shadow-inner shadow-cyan-900/40">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Recent Chat
                </p>
                <h2 className="mt-4 text-2xl font-semibold">Group Call Room</h2>
                <p className="mt-3 text-sm leading-6 text-cyan-100/70">
                  Join video calls, send messages, and manage your contact lists
                  all in one place.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-cyan-300">Active Members</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    12 online
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-violet-300">Messages Sent</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    2.5K today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 animate-fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Everything you need for modern chat
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cyan-100/75">
              From custom contact lists and secure messaging to video calls and
              group chats, ChatBuzz keeps conversations fast and beautiful.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                Custom Contact Lists
              </h3>
              <p className="mt-4 text-cyan-100/80">
                Add members by email to create personalized chat lists, separate
                from all users in the database.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-violet-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                Video & Voice Calls
              </h3>
              <p className="mt-4 text-cyan-100/80">
                Crystal-clear video and voice calls with group call support and
                call history tracking.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                End-to-End Encryption
              </h3>
              <p className="mt-4 text-cyan-100/80">
                Toggle encryption on/off per chat for maximum security and
                privacy control.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-violet-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                Group Chats & Calls
              </h3>
              <p className="mt-4 text-cyan-100/80">
                Create group conversations and multi-user video calls with ease.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                Profile Management
              </h3>
              <p className="mt-4 text-cyan-100/80">
                Update your profile, view message timestamps, and track read
                receipts with ticks.
              </p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-violet-500/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
              <h3 className="text-xl font-semibold text-white">
                Smart Chat UI
              </h3>
              <p className="mt-4 text-cyan-100/80">
                See last messages on the outside, manage call history, and enjoy
                a seamless chat experience.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 animate-fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Loved by chat enthusiasts
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-violet-900/20">
              <p className="text-lg leading-8 text-cyan-100/90">
                "ChatBuzz's custom contact lists and group calls make staying
                connected so easy. The encryption toggle gives me peace of
                mind."
              </p>
              <div className="mt-6 text-sm text-cyan-200">
                <p className="font-semibold text-white">Alex Rivera</p>
                <p>Freelance Designer</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-cyan-900/20">
              <p className="text-lg leading-8 text-cyan-100/90">
                "Video calls with timestamps and read receipts keep everything
                organized. ChatBuzz is my go-to for team chats."
              </p>
              <div className="mt-6 text-sm text-cyan-200">
                <p className="font-semibold text-white">Jordan Lee</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 animate-fade-up">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
                Ready to chat
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Join ChatBuzz and start connecting today.
              </h2>
            </div>
            <button
              onClick={() => navigate("/register")}
              className="shrink-0 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Create Account
            </button>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-cyan-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© 2026 ChatBuzz. Designed for modern teamwork.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default WelcomePage;
