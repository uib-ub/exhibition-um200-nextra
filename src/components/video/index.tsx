import { cn } from '@/lib/utils'
import ReactPlayer from 'react-player'

export function Video({ src, className }: { src: string, className: string }) {
  return (
    <div className={cn('feature aspect-video w-full', className)}>
      <ReactPlayer src={src} controls={true} style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }} />
    </div>
  )
}

