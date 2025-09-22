'use client'

import { Button } from '@/components/ui/button'
import { Download, ExternalLink } from 'lucide-react'

export default function SimpleDownloadCV() {
  return (
    <div className="flex gap-2">
      {/* Direct download link - most reliable */}
      <a
        href="/CV_Cao_Van_Huy.pdf"
        download="Cao_Van_Huy_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="transition-all duration-300 hover:scale-105"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </a>
      
      {/* View in browser */}
      <a
        href="/CV_Cao_Van_Huy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="View CV in browser"
        aria-label="View CV in browser"
      >
        <Button
          variant="ghost"
          className="transition-all duration-300 hover:scale-105"
          title="View CV in browser"
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
      </a>
    </div>
  )
}