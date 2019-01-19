function produceDrivingRange(blockRange) {
  return function isEnoughRange(start, end) {
    return blockRange > Math.abs(start-end) ? true : false;
  }
}
