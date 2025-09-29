"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  exerciseName: string
}

export function VideoModal({ isOpen, onClose, exerciseName }: VideoModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{exerciseName}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-muted">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Video Content */}
        <div className="p-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <video controls className="w-full h-full rounded-lg" poster="/exercise-video-thumbnail.jpg">
              <source src="/exemplo.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              Vídeo demonstrativo do exercício: <strong>{exerciseName}</strong>
            </p>
            <p className="mt-2">Observe a postura correta e a execução do movimento.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
