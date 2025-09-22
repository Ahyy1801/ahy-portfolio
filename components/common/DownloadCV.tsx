'use client'

import { Button } from '@/components/ui/button'
import { Download, FileText } from 'lucide-react'
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
  const handleDownload = () => {
    if (!personalInfo.cvUrl) {
      console.warn('CV URL not configured')
      return
    }

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = personalInfo.cvUrl
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Analytics tracking (optional)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'CV',
        event_label: 'Portfolio CV Download',
        value: 1
      })
    }
  }

  const handleViewCV = () => {
    if (!personalInfo.cvUrl) {
      console.warn('CV URL not configured')
      return
    }

    // Open CV in new tab for viewing
    window.open(personalInfo.cvUrl, '_blank')
  }

  if (!personalInfo.cvUrl) {
    return null
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
        onClick={handleViewCV}
        variant="ghost"
        size={size}
        className="transition-all duration-300 hover:scale-105"
        title="View CV in browser"
      >
        <FileText className="w-4 h-4" />
      </Button>
    </div>
  )
}

// TypeScript declaration for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters: Record<string, any>
    ) => void
  }
}