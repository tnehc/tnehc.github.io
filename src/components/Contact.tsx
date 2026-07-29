import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, Github, Linkedin, CheckCircle, MapPin } from 'lucide-react';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const isLight = theme === 'light';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bernadette-levera/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/tnehc', icon: Github },
    { name: 'Direct Mail', href: 'mailto:bernadettelevera@gmail.com', icon: Mail },
  ];

  return (
    <section 
      id="contact" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t scroll-mt-24 transition-colors ${
        isLight ? 'border-gray-100 bg-white' : 'border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Descriptive header lines */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 text-center lg:text-left items-center lg:items-start w-full">
            
            <div className="space-y-6 w-full">
              <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-2 font-bold ${
                isLight ? 'text-amber-600' : 'text-amber-400'
              }`}>06 // CONNECT WITH ME</p>
              
              <h2 className={`font-sans font-black text-3xl sm:text-5xl tracking-tight leading-tight uppercase ${
                isLight ? 'text-gray-950' : 'text-white'
              }`}>
                Let's build <br />
                <span className={isLight ? 'text-amber-600 font-black' : 'text-amber-400 font-black'}>
                  Something Great.
                </span>
              </h2>

              <p className={`font-sans text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-gray-655' : 'text-gray-400'
              }`}>
                Ready to elevate your digital presence? Send a message and let's bring your project to life.
              </p>

              {/* Direct Info: Email and Location */}
              <div className="pt-2 space-y-4 w-full">
                <div className="flex items-center gap-3.5 justify-center lg:justify-start">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${
                    isLight ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-amber-950/20 border-amber-500/10 text-amber-400'
                  }`}>
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-gray-500 font-bold">Email</span>
                    <a href="mailto:bernadettelevera@gmail.com" className={`text-sm font-bold font-sans hover:underline transition-colors block truncate ${
                      isLight ? 'text-gray-950 hover:text-amber-600' : 'text-white hover:text-amber-400'
                    }`}>
                      bernadettelevera@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 justify-center lg:justify-start">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${
                    isLight ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-amber-950/20 border-amber-500/10 text-amber-400'
                  }`}>
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-gray-500 font-bold">Location</span>
                    <span className={`text-sm font-bold font-sans block ${
                      isLight ? 'text-gray-900' : 'text-gray-300'
                    }`}>
                      Bacolod City, Philippines
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels details */}
            <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-gray-500 font-semibold">
                Communication Channels
              </h4>
              
              <div className="flex flex-wrap gap-3.5 select-none justify-center lg:justify-start">
                {socialLinks.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 border rounded-xl text-xs transition duration-300 font-semibold cursor-pointer ${
                        isLight 
                          ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700 hover:text-gray-900' 
                          : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-amber-500" />
                      <span className="font-sans font-medium">{soc.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact form panel */}
          <div className={`lg:col-span-7 border p-6 md:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden flex flex-col justify-center ${
            isLight 
              ? 'bg-white border-gray-200 shadow-sm' 
              : 'bg-gradient-to-br from-[#121318]/70 to-[#121318]/40 border-white/[0.06]'
          }`}>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success display block */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 py-12 text-center flex flex-col items-center"
                >
                  <div className={`inline-flex p-4 rounded-full text-emerald-500 border ${
                    isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/25 border-emerald-500/10 shadow-md'
                  }`}>
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-sans font-bold text-xl ${
                      isLight ? 'text-gray-950' : 'text-white'
                    }`}>
                      Message Delivered
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                      Thank you for reaching out! We will review your pipeline details and follow up within one business day.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* Interactive custom form layout */
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="form-name" className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        disabled={status === 'sending'}
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full disabled:opacity-50 border focus:outline-none transition-colors duration-300 rounded-xl py-3 px-4 font-sans text-sm focus:border-amber-500 ${
                          isLight 
                            ? 'bg-gray-55/40 border-gray-200 text-gray-900 placeholder-gray-400' 
                            : 'bg-[#0f1013] border-white/[0.06] text-white placeholder-gray-600'
                        }`}
                      />
                    </div>

                    {/* Email address */}
                    <div className="space-y-2 text-left">
                      <label htmlFor="form-email" className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        disabled={status === 'sending'}
                        placeholder="johndoe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full disabled:opacity-50 border focus:outline-none transition-colors duration-300 rounded-xl py-3 px-4 font-sans text-sm focus:border-amber-500 ${
                          isLight 
                            ? 'bg-gray-55/40 border-gray-200 text-gray-900 placeholder-gray-400' 
                            : 'bg-[#0f1013] border-white/[0.06] text-white placeholder-gray-600'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="form-subject" className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                      Subject
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      required
                      disabled={status === 'sending'}
                      placeholder="e.g. Website Design Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full disabled:opacity-50 border focus:outline-none transition-colors duration-300 rounded-xl py-3 px-4 font-sans text-sm focus:border-amber-500 ${
                        isLight 
                          ? 'bg-gray-55/40 border-gray-200 text-gray-900 placeholder-gray-400' 
                          : 'bg-[#0f1013] border-white/[0.06] text-white placeholder-gray-600'
                      }`}
                    />
                  </div>

                  {/* Message payload */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="form-message" className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                      Message Content
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      required
                      disabled={status === 'sending'}
                      placeholder="List details of your WordPress project, required integrations, or basic message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full disabled:opacity-50 border focus:outline-none transition-colors duration-300 rounded-xl py-3 px-4 font-sans text-sm focus:border-amber-500 resize-none ${
                        isLight 
                          ? 'bg-gray-55/40 border-gray-200 text-gray-900 placeholder-gray-400' 
                          : 'bg-[#0f1013] border-white/[0.06] text-white placeholder-gray-600'
                      }`}
                    />
                  </div>

                  {/* Dispatch trigger button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`relative w-full py-4 text-[10px] font-mono uppercase tracking-widest disabled:opacity-50 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 font-bold ${
                      isLight 
                        ? 'text-white bg-gray-950 hover:bg-gray-800' 
                        : 'text-black bg-amber-400 hover:bg-amber-300 shadow-md'
                    }`}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-slate-500 border-t-white animate-spin" /> DISPATCHING MESSAGE...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
