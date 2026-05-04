const flightCodes: Record<string, string> = {
  lisbon: "lis",
  barcelona: "bcn",
  sydney: "syd",
  bali: "dps",
  thailand: "bkkt",
  dubai: "dxb",
  canada: "yvr",
  australia: "syd",
  budapest: "bud",
  split: "spu",
};

export function getFlightLink(destination: string) {
  const key = destination.toLowerCase().split(",")[0].trim();
  const code = flightCodes[key];

  if (!code) {
    return "https://www.skyscanner.net/";
  }

  return `https://www.skyscanner.net/flights-to/${code}/cheap-flights-to-${code}.html`;
}

export function getHotelLink(destination: string) {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination)}&aid=YOUR_AFFILIATE_ID`;
}

export function getJobLink(destination: string) {
  return `https://www.adzuna.co.uk/search/results?where=${encodeURIComponent(destination)}&utm_source=kuafu`;
}