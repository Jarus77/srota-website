'use client'

import { track } from '@vercel/analytics'

export function trackSrotaDownload(section: string) {
  track('download_srota', {
    section,
    platform: 'mac',
    channel: 'website',
    version: '0.1.4',
  })
}
