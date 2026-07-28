export function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-7xl px-5 pb-10 md:px-8">
      <div className="flex flex-col gap-3 border-t border-black/10 pt-7 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
        <p>Made with curiosity, playlists, and too many open tabs.</p>
        <p>© {new Date().getFullYear()} MelodySmilez</p>
      </div>
    </footer>
  );
}
