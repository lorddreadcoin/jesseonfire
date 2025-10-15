"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaDiscord, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

export default function YouTubeMembersPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    youtubeUsername: '',
    discordUsername: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/youtube-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Verification failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email support@jesseonfire.com');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center p-4">
        <motion.div 
          className="max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="card-cinematic p-8 text-center shadow-fire-glow-lg">
            <motion.div 
              className="text-6xl mb-6 text-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaCheckCircle className="mx-auto" />
            </motion.div>
            <h2 className="text-3xl font-display text-fire-orange mb-4 uppercase">
              Check Your Email!
            </h2>
            <p className="text-xl text-ash-grey mb-8">
              Instructions sent to {formData.email}
            </p>
            
            <div className="bg-black/50 rounded-xl p-6 text-left space-y-4 border border-fire-orange/20">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-fire-orange text-xl" />
                <div>
                  <p className="text-white font-bold">Step 1: Open Email</p>
                  <p className="text-sm text-ash-grey">Check inbox (and spam folder)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaDiscord className="text-[#5865F2] text-xl" />
                <div>
                  <p className="text-white font-bold">Step 2: Join Discord</p>
                  <p className="text-sm text-ash-grey">Use the invite link in email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaYoutube className="text-red-600 text-xl" />
                <div>
                  <p className="text-white font-bold">Step 3: Connect YouTube</p>
                  <p className="text-sm text-ash-grey">Settings → Connections → YouTube</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <p className="text-white font-bold">Step 4: Auto Role!</p>
                  <p className="text-sm text-ash-grey">Discord assigns role in 2-3 minutes</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-charcoal rounded-lg">
              <p className="text-sm text-ash-grey">
                <span className="text-fire-orange font-bold">Need help?</span> Reply to the email or message @mods in Discord
              </p>
            </div>
            
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({ youtubeUsername: '', discordUsername: '', email: '' });
              }}
              className="mt-6 text-fire-orange hover:text-white transition-colors underline"
            >
              Verify another account
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-obsidian to-charcoal py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-4 mb-6">
            <FaYoutube className="text-5xl text-red-600" />
            <span className="text-5xl">→</span>
            <FaDiscord className="text-5xl text-[#5865F2]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-fire-orange mb-4 uppercase tracking-wider">
            YouTube Members
          </h1>
          <p className="text-2xl text-white mb-2">
            Get Discord Access FREE
          </p>
          <p className="text-lg text-ash-grey">
            Already supporting on YouTube? Don't pay twice!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* How It Works */}
          <motion.div 
            className="card-cinematic p-8 h-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading text-fire-orange mb-8 uppercase flex items-center gap-3">
              <span className="text-4xl">⚡</span> Instant Access
            </h2>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl flex-shrink-0">1️⃣</div>
                <div>
                  <p className="font-bold text-white text-lg">Submit Form</p>
                  <p className="text-ash-grey">
                    Enter your YouTube & Discord usernames
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl flex-shrink-0">2️⃣</div>
                <div>
                  <p className="font-bold text-white text-lg">Get Email</p>
                  <p className="text-ash-grey">
                    Instant email with Discord invite
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl flex-shrink-0">3️⃣</div>
                <div>
                  <p className="font-bold text-white text-lg">Connect & Done</p>
                  <p className="text-ash-grey">
                    Link YouTube in Discord for auto role
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 p-4 bg-fire-orange/10 rounded-lg border border-fire-orange/30">
              <p className="text-sm text-fire-orange font-bold mb-1">🔥 Auto-Management</p>
              <p className="text-xs text-ash-grey">
                If you cancel YouTube membership, Discord removes your role automatically
              </p>
            </div>
          </motion.div>

          {/* Verification Form */}
          <motion.div 
            className="card-cinematic p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-heading text-fire-orange mb-8 uppercase">
              Get Your Access
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  YouTube Username
                </label>
                <div className="relative">
                  <FaYoutube className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600" />
                  <input
                    type="text"
                    required
                    placeholder="@yourname"
                    value={formData.youtubeUsername}
                    onChange={(e) => setFormData({...formData, youtubeUsername: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border-2 border-fire-orange/30 rounded-lg text-white placeholder-ash-grey/50 focus:border-fire-orange focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Discord Username
                </label>
                <div className="relative">
                  <FaDiscord className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5865F2]" />
                  <input
                    type="text"
                    required
                    placeholder="username#0000 or @username"
                    value={formData.discordUsername}
                    onChange={(e) => setFormData({...formData, discordUsername: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border-2 border-fire-orange/30 rounded-lg text-white placeholder-ash-grey/50 focus:border-fire-orange focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-fire-orange" />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border-2 border-fire-orange/30 rounded-lg text-white placeholder-ash-grey/50 focus:border-fire-orange focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-fire w-full text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Instant Access
                    <span className="text-2xl">→</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="card-cinematic p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-heading text-fire-orange mb-8 uppercase text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">❓</span> Do I need to pay for Patreon?
                </p>
                <p className="text-ash-grey pl-7">
                  No! Your YouTube membership gives you full Discord access. No double payment.
                </p>
              </div>
              
              <div>
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">⏱️</span> How fast do I get access?
                </p>
                <p className="text-ash-grey pl-7">
                  Email arrives instantly. Discord role appears 2-3 minutes after connecting YouTube.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">🚫</span> What if I cancel my membership?
                </p>
                <p className="text-ash-grey pl-7">
                  Discord automatically removes your role within 4 hours of YouTube membership ending.
                </p>
              </div>
              
              <div>
                <p className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-xl">🆘</span> Need help?
                </p>
                <p className="text-ash-grey pl-7">
                  Reply to the verification email or message @mods in Discord for instant help.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
