function produceDrivingRange(blockRange) {
  return function isEnoughRange(start, end) {
    let startInt=parseInt(start, 10);
    let endInt=parseInt(end, 10);
    let travelDistance = Math.abs(startInt-endInt);
    let totalResult=Math.abs(blockRange-travelDistance)
    return blockRange > travelDistance ? `within range by ${totalResult}` : `${totalResult} blocks out of range`;
  }
}

function produceTipCalculator(tipPercent) {
  return function tipFinder() {
    
  }
}
