import Link from "next/link";

type ExternalLinkProps = {
  externalUrl: string;
  umamiEventLabel: string;
  externalLinkText: string;
};

const ExternalLink = ({
  externalUrl,
  umamiEventLabel,
  externalLinkText,
}: ExternalLinkProps) => {
  <Link
    href={externalUrl}
    data-umami-event={umamiEventLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {externalLinkText}
  </Link>;
};
export default ExternalLink;
