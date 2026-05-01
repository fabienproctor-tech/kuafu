export function getFlightLink(destination: string) {
  return `https://www.skyscanner.net/?utm_source=kuafu&utm_medium=affiliate&q=${encodeURIComponent(destination)}`;
}

export function getHotelLink(destination: string) {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination)}&aid=YOUR_AFFILIATE_ID`;
}

export function getJobLink(destination: string) {
  return `https://www.adzuna.co.uk/search/results?where=${encodeURIComponent(destination)}&utm_source=kuafu`;
}