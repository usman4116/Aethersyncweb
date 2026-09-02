/**
 * FilmGrain — the atmosphere layer that sits *above* the page.
 *
 * Three stacked effects, all pointer-transparent: animated fractal-noise grain
 * (reads as 35mm), a radial vignette that focuses the centre of the frame, and
 * one slow light sweep. Intensity comes from `--grain-opacity`,
 * `--vignette-opacity` and `--scan-opacity`, so light mode is a whisper and
 * dark mode gets the full treatment from the same component.
 */
export function FilmGrain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-grain overflow-hidden" aria-hidden>
      <div className="cine-grain animate-grain bg-grain" />
      <div className="cine-vignette absolute inset-0" />
      <div className="cine-scan animate-scan absolute inset-x-0 h-[42vh]" />
    </div>
  );
}
