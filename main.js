String.prototype.repAll = function(from,to) {
  return this.split(from).join(to)
}
function time(format) {
  let f = format;
  f = f.repAll("y", new Date().getFullYear())
  f = f.repAll("M", new Date().getMonth()+1)
  f = f.repAll("d", new Date().getDate())
  if (new Date().getHours() > 12) {
    f = f.repAll("h", new Date().getHours()-12)
  } else if (new Date().getHours() < 12) {
    f = f.repAll("h", new Date().getHours())
   }
  f = f.repAll("m", new Date().getMinutes())
  f = f.repAll("s", new Date().getSeconds())
  f = f.repAll("S", new Date().getMilliseconds())
  return f
}

let t = time;
