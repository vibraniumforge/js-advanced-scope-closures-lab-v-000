function produceDrivingRange(firstRange) {
  return function isEnoughRange(secondRange) {
    return firstRange > secondRange ? true : false;
  }
}