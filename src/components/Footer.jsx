import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-baseDark text-gray-400 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-nijaGreen font-bold text-2xl mb-4">NIJA</h3>
                        <p className="text-sm leading-relaxed">
                            Enterprise-grade AI and blockchain solutions for modern organisations.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/solutions" className="hover:text-nijaGreen transition">Supply Chain</Link></li>
                            <li><Link to="/solutions" className="hover:text-nijaGreen transition">Healthcare</Link></li>
                            <li><Link to="/solutions" className="hover:text-nijaGreen transition">Financial Services</Link></li>
                            <li><Link to="/solutions" className="hover:text-nijaGreen transition">Energy & Utilities</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-nijaGreen transition">About Us</Link></li>
                            <li><Link to="/technologies" className="hover:text-nijaGreen transition">Technologies</Link></li>
                            <li><Link to="/contact" className="hover:text-nijaGreen transition">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-nijaGreen transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-nijaGreen transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-nijaGreen transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-nijaGreen transition">Security</a></li>
                            <li><a href="#" className="hover:text-nijaGreen transition">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2026 NIJA. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-nijaGreen transition">LinkedIn</a>
                        <a href="#" className="hover:text-nijaGreen transition">Twitter</a>
                        <a href="#" className="hover:text-nijaGreen transition">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
