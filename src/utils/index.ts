export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatPrice = (price: number, locale = 'th-TH') => {
  return new Intl.NumberFormat(locale).format(price);
};

export const getAgentIconColor = (index: number): string => {
  const colors = [
    'from-cyan-400 to-blue-500',
    'from-emerald-400 to-teal-500',
    'from-violet-400 to-purple-500',
    'from-amber-400 to-orange-500',
    'from-rose-400 to-pink-500',
    'from-indigo-400 to-blue-600',
    'from-fuchsia-400 to-pink-600',
  ];
  return colors[index % colors.length];
};