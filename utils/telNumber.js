export const formatPhoneNumber = (phone="") => {
    const cleaned = phone.replace(/\D/g, "");
  
    if (cleaned.length === 10 && cleaned.startsWith("0")) {
      const intl = "+261" + cleaned.slice(1);
  
      // Ajoute les espaces : "+261 32 45 018 01"
      return intl.replace(
        /^\+261(\d{2})(\d{2})(\d{3})(\d{2})$/,
        "+261 $1 $2 $3 $4"
      );
    }
  
    if (cleaned.startsWith("261") && cleaned.length === 12) {
      return cleaned.replace(
        /^261(\d{2})(\d{2})(\d{3})(\d{2})$/,
        "+261 $1 $2 $3 $4"
      );
    }

    return phone;
};