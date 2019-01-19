function produceDrivingRange(blockRange) {
  return function isEnoughRange(start, end) {
    let startInt=parseInt(start, 10);
    let endInt=parseInt(end, 10);
    let distance = Math.abs(startInt-endInt);
    return blockRange > distance ? `within range by ${distance-blockRange}` : `${blockRange-distance} blocks out of range`;
  }
}
