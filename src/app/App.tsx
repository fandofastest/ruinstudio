import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Sparkles, 
  Palette, 
  Rocket,
  Users,
  Trophy,
  Target,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Runic Studios
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Services</a>
            <a href="#games" className="text-slate-300 hover:text-amber-400 transition-colors">Games</a>
            <a href="#team" className="text-slate-300 hover:text-amber-400 transition-colors">Team</a>
            <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Norse mythology atmosphere"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Forging Legendary
              </span>
              <br />
              <span className="text-white">Gaming Experiences</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Mobile Slot & Casino Game Development Studio
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#games"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-lg font-semibold text-slate-950 flex items-center gap-2">
                Our Games
                <Gamepad2 className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-4 border-2 border-amber-500 rounded-lg overflow-hidden transition-all hover:scale-105 hover:border-amber-400"
            >
              <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative text-lg font-semibold text-amber-400 group-hover:text-amber-300">
                Contact Us
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full" />
                <span className="text-amber-400 uppercase tracking-wider text-sm">About Runic Studios</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
                <br />
                <span className="text-white">In Mobile Gaming</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                At Runic Studios, we are passionate about creating immersive and innovative mobile gaming experiences. 
                Based in the UK, our studio specializes in premium slot and casino game development, combining cutting-edge 
                technology with captivating design.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our mission is to push the boundaries of mobile gaming through innovative gameplay mechanics, stunning 
                visuals, and engaging narratives. We don't just develop games – we forge legendary experiences that 
                resonate with players worldwide.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise in game publishing and a deep understanding of the mobile gaming market, we deliver 
                AAA-quality titles that stand out in an increasingly competitive landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive game development solutions tailored to your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gamepad2 className="w-12 h-12" />,
                title: 'Game Development',
                description: 'Full-cycle development from concept to launch, utilizing latest game engines and technologies.'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Slot Game Design',
                description: 'Engaging slot mechanics with stunning visual effects and rewarding gameplay systems.'
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: 'UI/UX Design',
                description: 'Intuitive interfaces and captivating user experiences optimized for mobile platforms.'
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Game Publishing',
                description: 'End-to-end publishing support including marketing, distribution, and monetization strategies.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 rounded-2xl transition-all duration-300" />
                <div className="relative">
                  <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Game Section */}
      <section id="games" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full" />
                <span className="text-amber-400 uppercase tracking-wider text-sm">Featured Game</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Runic Spin
                </span>
                <br />
                <span className="text-white">Slots</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Embark on an epic Norse mythology adventure with Runic Spin Slots. Experience thrilling gameplay, 
                stunning graphics, and massive rewards. Spin the ancient runes and unlock legendary treasures 
                in this premium mobile slot experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-slate-300">Immersive Norse mythology theme</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-slate-300">Multiple bonus features & free spins</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-slate-300">Progressive jackpot system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-slate-300">Optimized for iOS & Android</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Google Play</span>
                </button>
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <span>App Store</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[650px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                  {/* Screen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 flex items-center justify-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1744974086616-8cd4368609ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                      alt="Runic Spin Slots game"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-[3rem] -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry-leading expertise backed by proven results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Trophy className="w-16 h-16" />, value: '8+', label: 'Years Experience' },
              { icon: <Gamepad2 className="w-16 h-16" />, value: '25+', label: 'Published Titles' },
              { icon: <Users className="w-16 h-16" />, value: '2M+', label: 'Active Players' },
              { icon: <Target className="w-16 h-16" />, value: '50+', label: 'Awards Won' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-b from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-400 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Meet the visionaries behind Runic Studios
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Director"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-3xl mb-2">Alexander Hunt</h3>
                  <p className="text-amber-400 text-lg mb-4">Founder & Director</p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    With over a decade of experience in game development and a passion for Norse mythology, 
                    Alexander leads Runic Studios with a vision to create unforgettable gaming experiences.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Let's discuss your next gaming project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                >
                  <span className="text-lg font-semibold text-slate-950">Send Message</span>
                </button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a href="mailto:contact@runicstudios.co.uk" className="text-amber-400 hover:text-amber-300 transition-colors">
                      contact@runicstudios.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Registered Office</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Runic Studios Ltd.<br />
                      45 Fitzroy Street<br />
                      London, W1T 6EB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Runic Studios
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 Runic Studios Ltd. All rights reserved. Company No. 12345678
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
