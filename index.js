function superbowlWin(array) {
  let win = array.find(object => object.result === "W")
  return win.year ? win.year : undefined
}