function barTriang(a, b, c) {
  let centerX = 0
  let centerY = 0
  centerX = (a[0] + b[0] + c[0]) / 3
  centerY = (a[1] + b[1] + c[1]) / 3
  return [+centerX.toFixed(4), +centerY.toFixed(4)]
}

console.log(barTriang([4, 6], [12, 4], [10, 10]))
barTriang([4, 2], [12, 2], [6, 10])