interface YouTubeEmbedProps {
    videoId: string
    title: string
  }
  
  export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
    return (
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
  
  