
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Instagram } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple/5 to-pink/5 dark:from-purple/20 dark:to-pink/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple dark:text-white mb-4">
              Contact Us
            </h2>
            <div className="h-1 w-20 bg-pink mx-auto rounded-full"></div>
            
            <div className="mt-6">
              <a
                href="https://www.instagram.com/animeandmangaclubblr/profilecard/?igsh=MWwxY284MmNkYTZ4ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple via-pink to-purple bg-[length:200%_100%] hover:animate-shine text-white rounded-full transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-purple/20 dark:border-white/20 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-colors bg-white/50 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-purple/20 dark:border-white/20 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-colors bg-white/50 dark:bg-white/5 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-purple/20 dark:border-white/20 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-colors bg-white/50 dark:bg-white/5 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple via-pink to-purple bg-[length:200%_100%] hover:animate-shine rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
