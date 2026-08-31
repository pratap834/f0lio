export const formatDate = (date: string): string => {
  if (!date || date.toLowerCase() === 'present') return 'Present';
  
  // If in YYYY-MM format, parse year and month directly to avoid UTC timezone drift
  const parts = date.split('-');
  if (parts.length >= 2) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const d = new Date(year, month, 1);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  }

  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
