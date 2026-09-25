export const WA_NUMBER = '6281373703639';
export const WA_PHONE_DISPLAY = '0813-7370-3639';
export const WA_PHONE_INTL = '+6281373703639';

export interface WhatsAppOptions {
  carModel?: string;
  pickupLocation?: string;
  rentalDate?: string;
  lang?: 'id' | 'en';
  customMessage?: string;
}

export function buildWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const {
    carModel,
    pickupLocation,
    rentalDate = 'segera',
    lang = 'id',
    customMessage,
  } = options;

  if (customMessage) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(customMessage)}`;
  }

  let text = '';

  if (lang === 'en') {
    const model = carModel || 'a vehicle';
    const point = pickupLocation || 'Harbour Bay / Batam Centre / Airport';
    const dates = rentalDate !== 'segera' ? rentalDate : 'my upcoming trip';
    text = `Hi Lincah Rent Car, I would like to book ${model} for ${dates}. Pickup point: ${point}. Could you check the availability?`;
  } else {
    if (pickupLocation && !carModel) {
      text = `Halo Admin Lincah Rent Car, saya butuh penjemputan mobil di ${pickupLocation} untuk tanggal ${rentalDate}. Mohon infonya.`;
    } else {
      const model = carModel || 'mobil';
      text = `Halo Admin Lincah Rent Car, saya tertarik sewa mobil ${model} di Batam untuk tanggal ${rentalDate}. Apakah unit tersedia?`;
    }
  }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
