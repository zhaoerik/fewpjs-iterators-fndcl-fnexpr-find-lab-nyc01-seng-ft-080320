function superbowlWin(array) {
  array.find(object => {
    win = object.result === "W"
    return win.year
  })
  return undefined
}