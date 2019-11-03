export function plotBuilder(plot) {
  return Object.keys(plot).map((key) => ({
    t: key,
    y: plot[key].high,
  }));
}
