'use client'

import { useState } from 'react'
import Image from 'next/image'

type ProjectImageProps = {
  src: string
  title: string
  url: string
  color: string
}

function getHost(url: string) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

/** Browser-window style preview. Falls back to a gradient if the PNG is missing. */
export function ProjectImage({ src, title, url, color }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="border-b border-border bg-background/40">
      <div className="flex items-center gap-3 border-b border-border/70 bg-background/60 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="min-w-0 flex-1 truncate rounded-md bg-muted/70 px-3 py-1 text-center font-mono text-[10px] text-muted-foreground">
          {getHost(url)}
        </span>
      </div>

      <div className="relative aspect-[1366/641] w-full overflow-hidden bg-muted">
        {failed ? (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${color}`}>
            <span className="font-serif text-4xl text-foreground/40">{title}</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={`${title} website preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onError={() => setFailed(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>
    </div>
  )
}
