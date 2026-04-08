import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'รับส่งผู้สูงอายุ', href: '#' },
    { label: 'บริการลงทะเบียน', href: '#' },
    { label: 'ส่งยาถึงบ้าน', href: '#' },
    { label: 'Home Care', href: '#' },
  ],
  company: [
    { label: 'เกี่ยวกับเรา', href: '#' },
    { label: 'ทีมงาน', href: '#' },
    { label: 'ร่วมงานกับเรา', href: '#' },
    { label: 'ติดต่อ', href: '#' },
  ],
  resources: [
    { label: 'บทความ', href: '#' },
    { label: 'คำถามที่พบบ่อย', href: '#' },
    { label: 'นโยบายความเป็นส่วนตัว', href: '#' },
    { label: 'เงื่อนไขการใช้บริการ', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="section-container py-16">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ElderCare</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                บริการดูแลผู้สูงอายุครบวงจร ด้วยเทคโนโลยี AI
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">บริษัท</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">ข้อมูล</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">ติดต่อ</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">กรุงเทพมหานคร, ประเทศไทย</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a href="tel:02-xxx-xxxx" className="text-sm hover:text-primary-400">02-XXX-XXXX</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a href="mailto:contact@eldercare.com" className="text-sm hover:text-primary-400">contact@eldercare.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2024 ElderCare. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Made with <Heart className="w-4 h-4 inline text-rose-500" /> in Thailand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}