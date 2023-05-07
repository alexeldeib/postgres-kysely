import ms from 'ms'

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return `${process.env.NEXT_PUBLIC_SITE_URL}`
  }

  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}
