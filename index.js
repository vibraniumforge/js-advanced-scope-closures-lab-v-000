function produceDrivingRange(blockRange) {
  return function isEnoughRange(start, end) {
    return blockRange > Math.abs(start-end) ? `within range by ${Math.abs(start-end)}` : `${Math.abs(start-end)} blocks out of range`;
  }
}
