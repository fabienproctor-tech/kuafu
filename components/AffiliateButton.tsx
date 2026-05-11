type AffiliateButtonProps = {
  href: string;
  label: string;
};

export default function AffiliateButton({
  href,
  label,
}: AffiliateButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
    >
      {label}
    </a>
  );
}