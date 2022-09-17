function walk(steps, footprintMeters, studentSpeed) {
    const distance = steps * footprintMeters;
    const speed = studentSpeed / 3.6;
    const timeToRest = Math.floor(distance / 500)*60;
    const time = (distance / speed) + timeToRest;

    const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, 0);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);

  const seconds = Math.round(time - minutes * 60)
    .toString()
    .padStart(2, 0);

  console.log(`${hours}:${minutes}:${seconds}`);
}
  walk(4000, 0.6, 5);
  walk(2564, 0.7, 5.5);