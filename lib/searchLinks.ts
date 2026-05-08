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
  const key = destination.toLowerCase();

  if (key.includes("australia") || key.includes("sydney")) {
    return "https://www.gooverseas.com/work-abroad/australia";
  }

  if (key.includes("thailand") || key.includes("bangkok")) {
    return "https://www.gooverseas.com/teach-abroad/thailand";
  }

  if (key.includes("spain") || key.includes("barcelona")) {
    return "https://www.gooverseas.com/work-abroad/spain";
  }

  if (key.includes("portugal") || key.includes("lisbon")) {
    return "https://www.gooverseas.com/work-abroad/portugal";
  }

  if (key.includes("canada")) {
    return "https://www.gooverseas.com/work-abroad/canada";
  }

  if (key.includes("dubai") || key.includes("uae")) {
    return "https://www.gooverseas.com/";
  }

  return "https://www.gooverseas.com/";
}