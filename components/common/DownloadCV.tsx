'use client'

import { Button } from '@/components/ui/button'
import { Download, FileText, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/data/personal-info'

interface DownloadCVProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  showIcon?: boolean
}

export default function DownloadCV({ 
  variant = 'outline', 
  size = 'default',
  className = '',
  showIcon = true 
}: DownloadCVProps) {
  
  const cvUrl = personalInfo.cvUrl || '/CV_Cao_Van_Huy.pdf'

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    
    console.log('Download clicked, CV URL:', cvUrl)
    
    // Method 1: Direct download link
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Cao_Van_Huy_CV.pdf'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    
    // Force click
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(cvUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={handleDownload}
        variant={variant}
        size={size}
        className={`transition-all duration-300 hover:scale-105 ${className}`}
      >
        {showIcon && <Download className="w-4 h-4 mr-2" />}
        Download CV
      </Button>
      
      <Button
        onClick={handleView}
        variant="ghost"
        size={size}
        className="transition-all duration-300 hover:scale-105"
        title="View CV in browser"
      >
        <FileText className="w-4 h-4" />
      </Button>

      {/* Fallback: Direct link */}
      <a
        href={cvUrl}
        download="Cao_Van_Huy_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
        id="cv-download-fallback"
      >
        Download CV Fallback
      </a>
    </div>
  )
}