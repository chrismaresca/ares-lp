export default function Video() {
  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
        <iframe className="h-full w-full" src="https://www.youtube.com/embed/iyrS4dnDo4M?si=sAMxetnFM0r8nI9Z?vq=hd2160p" title="Ares Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
    </div>
  );
}
