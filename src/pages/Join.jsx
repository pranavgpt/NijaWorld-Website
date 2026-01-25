import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState } from 'react';

// Updated: Sign Up form with Role and Country optional fields
export default function Join() {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({ name: '', email: '', organisation: '', role: '', country: '' });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', loginForm);
        // TODO: Implement actual authentication
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log('Signup request:', signupForm);
        // TODO: Implement actual signup request
    };

    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* ===================================== */}
            {/* HERO SECTION with Photo Collage      */}
            {/* ===================================== */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B0F14] via-[#141B28] to-[#0B0F14] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Text Content */}
                        <div>
                            {/* Label Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <span className="text-sm font-semibold text-nijaPurple uppercase tracking-wider">
                                    JOIN NIJA
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            >
                                Build the future of secure AI and blockchain systems
                            </motion.h1>

                            {/* Subtext */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-gray-300 mb-8 leading-relaxed"
                            >
                                Join a trusted enterprise-focused organisation working with institutions,
                                forward-thinking partners, and technology leaders modernising operations.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a href="#access">
                                    <button className="bg-nijaGreen hover:bg-green-500 text-white px-7 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50">
                                        Join Today
                                    </button>
                                </a>
                                <a href="/contact">
                                    <button className="border-2 border-nijaPurple text-nijaPurple px-7 py-3.5 rounded-lg font-semibold transition hover:bg-nijaPurple/10">
                                        Get in Touch
                                    </button>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right: Photo Collage with Geometric Shapes */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative w-full h-[400px]">
                                {/* Professional Photo Collage Image */}
                                <img
                                    src="/join-hero-collage.png"
                                    alt="NIJA collaboration and leadership"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===================================== */}
            {/* ACCESS NIJA SECTION (Authentication) */}
            {/* ===================================== */}
            <section id="access" className="py-20 bg-gradient-to-b from-[#0B0F14] to-[#0a0e13] text-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-2">
                            Access NIJA
                        </h2>
                    </motion.div>

                    {/* Two-Card Layout: Login + Sign Up */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* ========== LOGIN CARD ========== */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-transparent"
                        >
                            <h3 className="text-xl font-bold mb-6">
                                Login
                            </h3>

                            <form onSubmit={handleLoginSubmit} className="space-y-4">

                                {/* Email Field */}
                                <div>
                                    <input
                                        type="email"
                                        required
                                        value={loginForm.email}
                                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition placeholder-gray-500"
                                        placeholder="Email"
                                    />
                                </div>

                                {/* Password Field */}
                                <div>
                                    <input
                                        type="password"
                                        required
                                        value={loginForm.password}
                                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition placeholder-gray-500"
                                        placeholder="Password"
                                    />
                                </div>

                                {/* Login Button + Helper Text */}
                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        className="bg-nijaGreen hover:bg-green-500 text-white px-8 py-3 rounded-md font-semibold transition"
                                    >
                                        Login
                                    </button>
                                    <span className="text-sm text-gray-400">
                                        For existing NIJA partners and customers
                                    </span>
                                </div>
                            </form>
                        </motion.div>

                        {/* ========== SIGN UP CARD ========== */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-transparent"
                        >
                            <h3 className="text-xl font-bold mb-6">
                                Sign Up
                            </h3>

                            <form onSubmit={handleSignupSubmit} className="space-y-4">

                                {/* Name and Work Email in same row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            value={signupForm.name}
                                            onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition placeholder-gray-500"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            required
                                            value={signupForm.email}
                                            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition placeholder-gray-500"
                                            placeholder="Work Email"
                                        />
                                    </div>
                                </div>

                                {/* Organisation Field */}
                                <div>
                                    <input
                                        type="text"
                                        required
                                        value={signupForm.organisation}
                                        onChange={(e) => setSignupForm({ ...signupForm, organisation: e.target.value })}
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition placeholder-gray-500"
                                        placeholder="Organisation"
                                    />
                                </div>

                                {/* Role / Intended Use Field (Optional) */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Role / Intended Use <span className="text-gray-500">(optional)</span>
                                    </label>
                                    <select
                                        value={signupForm.role}
                                        onChange={(e) => setSignupForm({ ...signupForm, role: e.target.value })}
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                    >
                                        <option value="" className="bg-gray-800">Select role</option>
                                        <option value="enterprise" className="bg-gray-800">Enterprise / Corporate</option>
                                        <option value="partner" className="bg-gray-800">Technology Partner</option>
                                        <option value="developer" className="bg-gray-800">Developer</option>
                                        <option value="research" className="bg-gray-800">Research / Academic</option>
                                        <option value="other" className="bg-gray-800">Other</option>
                                    </select>
                                </div>

                                {/* Country / Region Field (Optional) */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Country / Region <span className="text-gray-500">(optional)</span>
                                    </label>
                                    <select
                                        value={signupForm.country}
                                        onChange={(e) => setSignupForm({ ...signupForm, country: e.target.value })}
                                        className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-nijaGreen focus:border-transparent transition"
                                    >
                                        <option value="" className="bg-gray-800">Select country or region</option>
                                        <option value="US" className="bg-gray-800">United States</option>
                                        <option value="UK" className="bg-gray-800">United Kingdom</option>
                                        <option value="CA" className="bg-gray-800">Canada</option>
                                        <option value="DE" className="bg-gray-800">Germany</option>
                                        <option value="FR" className="bg-gray-800">France</option>
                                        <option value="IN" className="bg-gray-800">India</option>
                                        <option value="CN" className="bg-gray-800">China</option>
                                        <option value="JP" className="bg-gray-800">Japan</option>
                                        <option value="SG" className="bg-gray-800">Singapore</option>
                                        <option value="AU" className="bg-gray-800">Australia</option>
                                        <option value="other" className="bg-gray-800">Other</option>
                                    </select>
                                </div>

                                {/* Request Access Button + Helper Text */}
                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        className="bg-nijaPurple hover:bg-purple-600 text-white px-8 py-3 rounded-md font-semibold transition"
                                    >
                                        Request Access
                                    </button>
                                    <span className="text-sm text-gray-400">
                                        Enterprise access is reviewed before approval
                                    </span>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
