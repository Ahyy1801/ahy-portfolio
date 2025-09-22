'use client'

import { Button } from '@/components/ui/button'
import { Download, ExternalLink } from 'lucide-react'

export default function SimpleDownloadCV() {
  return (
    <div className="flex gap-2">
      {/* Direct download link - most reliable */}
      <Button
        variant="outline"
        className="transition-all duration-300 hover:scale-105"
        asChild
      >
        <a
          href="/CV_Cao_Van_Huy.pdf"
          download="Cao_Van_Huy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </a>
      </Button>
      
      {/* View in browser */}
      <Button
        variant="ghost"
        className="transition-all duration-300 hover:scale-105"
        title="View CV in browser"
        asChild
      >
        <a
          href="/CV_Cao_Van_Huy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="View CV in browser"
          aria-label="View CV in browser"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </div>
  )
}