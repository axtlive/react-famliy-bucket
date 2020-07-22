let timer1, timer2;


export default function resetScroll() {
  clearInterval(timer1)
  clearInterval(timer2)
  const html = document.documentElement;
  timer1 = animate(html.scrollTop, 0, val => {
    html.scrollTop = val;
  })
  timer2 = animate(html.scrollLeft, 0, val => {
    html.scrollLeft = val
  })
}


function animate(start, end, callback) {
  let tick = 16; // 每隔16ms完成一次
  let total = 300; // 总时间为300ms
  let times = Math.ceil(total / tick);
  let curTimes = 0;
  let dis = (end - start) / times; // 总距离除以次数  总共的次数
  let timer;
  timer = setInterval(() => {
    curTimes++;
    start += dis;
    if (curTimes === times) {
      start = end;
      clearInterval(timer);
    }
    callback(start)
  }, tick)
  return timer;
}