export function bibleGatewayUrl(ref: string, version = "ESV"): string {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=${version}`
}
