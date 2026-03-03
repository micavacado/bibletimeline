import { bibleGatewayUrl } from "@/utils/biblegateway"

interface ScriptureRefProps {
  reference: string
  className?: string
}

export default function ScriptureRef({ reference, className }: ScriptureRefProps) {
  return (
    <a
      href={bibleGatewayUrl(reference)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {reference}
    </a>
  )
}
