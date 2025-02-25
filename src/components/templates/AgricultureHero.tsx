import * as React from "react";

interface StatItem {
  title: string;
  id: string;
}

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

const stats: StatItem[] = [
  { title: "Agriculture Products", id: "agri-products" },
  { title: "Projects Completed", id: "projects" },
  { title: "Satisfied Clients", id: "clients" },
  { title: "Experts Farmers", id: "experts" },
];

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        "https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/subscribe?email=" +
          encodeURIComponent(email),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMessage("Successfully subscribed!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mb-12 sm:mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full sm:w-[373px] gap-2 py-1 pr-2 pl-5 mt-10 bg-white border border-solid border-zinc-800 rounded-[30px] shadow-md"
      >
        <label htmlFor="email" className="sr-only">
          Your email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 py-3 text-zinc-500 bg-transparent border-none outline-none"
          required
          aria-label="Email address input field"
        />
        <button
          type="submit"
          className="px-6 py-1 font-bold text-white bg-sky-800 rounded-[29px] transition duration-300 hover:bg-sky-700"
          aria-label="Join Now"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Join Now"}
        </button>
      </form>
      {message && <p className="text-sm text-white mt-2">{message}</p>}
    </div>
  );
};

const AgricultureHero: React.FC = () => {
  return ( 
    <main className="flex flex-col items-center overflow-hidden bg-white">
      {/* Blue Box Section - With White Background Outside */}
      <div className="relative w-full flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        <div className="relative z-10 w-full max-w-5xl">
          <div className="flex flex-wrap justify-center items-center gap-3.5 py-10 px-8 bg-sky-800 text-white rounded-xl shadow-lg mt-10 sm:mt-16">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div
                  className="flex-1 text-center text-lg sm:text-xl font-medium mx-3"
                  role="text"
                  aria-label={stat.title}
                >
                  {stat.title}
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-0.5 h-8 bg-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image Hero Section */}
      <section
        className="relative flex flex-col h-max items-center w-full bg-cover bg-center sm:h-[600px] lg:h-[656.8px] text-white mt-[-40px] z-0"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F0014938fb5fd4152961b843a94ff3203%2F8b3bac380f25b5369542efec8644bab0527b7445276f325b8934f031a1a32d94)",
        }}
        role="banner"
        aria-label="Agriculture Hero Section"
      >
        {/* Hero Text */}
        <div className="text-center mt-16 sm:mt-40 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Be a part of the farming transformation
          </h1>
          <p className="mt-4 text-lg sm:text-2xl sm:mt-10">
            Team up with the Expert Software Developers
          </p>
        </div>

        {/* Email Subscription Form */}
        <EmailForm onSubmit={() => {}} />
      </section>
    </main>
  );
};

export default AgricultureHero;
