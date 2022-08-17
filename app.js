
function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger)
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  })
  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('#main').style.transform
      ? 'transform'
      : 'fixed',
  })
  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}
locoTrigger();
gsap.to('#page2 img', {
  duration: 1,
  scale: 1.12,
  scrollTrigger: {
    trigger: '#page2 img',
    scroller: '#main',
    scrub: true,
    start: 'top 70%',
    end: 'top  0%',
  },
})

$('#page1 #mainText h1').textillate({
  in: {
    effect: 'fadeInUp',
  },
})
$('#page1 #subText1 h1').textillate({
  in: { effect: 'fadeInUp' },
})
$('#page1 #subText2 h1').textillate({ in: { effect: 'fadeInUp' } })

gsap.to('#page3 #text h1', {
  transform: 'translateY(-0%)',
  opacity: '1',
  scrollTrigger: {
    trigger: '#page3 #text ',
    scroller: '#main',
    start: 'top 70%',
    end: 'top 50%',
    scrub: true,
  },
})
gsap.to('#page4 hr', {
  width: '86%',
  // duration: 2,
  scrollTrigger: {
    trigger: '#page4 hr',
    scroller:'#main',
    start: 'top 95%',
    end: 'top 95%',
  },
})
var menu = document.querySelector('#menu')
var navi = document.querySelector('#nav i')
var fullNav = document.querySelector('#fullScreenMenu')
var Nav = document.querySelector('nav')
menu.addEventListener('click', function () {
  console.log('hello')
  fullNav.style.transform = `translateY(0%)`
  Nav.style.display = `none`
})
navi.addEventListener('click', function () {
  console.log('hello')
  fullNav.style.transform = `translateY(-100%)`
  Nav.style.display = `flex`
})
document.querySelector(".varity").addEventListener("mousemove",(eve)=>{
  var point=document.querySelector(".varity .hover");
  var re=document.querySelector(".varity").getBoundingClientRect()
  console.log(eve.pageX)
  console.log(eve.pageY)
  console.log(re)
  point.style.left=`${eve.pageX-re.left}px`
  point.style.top=eve.pageY-re.top+'px'
})
document.querySelector(".varity2").addEventListener("mousemove",(eve)=>{
  var point=document.querySelector(".varity .hover2");
  var re=document.querySelector(".varity2").getBoundingClientRect()
  console.log(eve.pageX)
  console.log(eve.pageY)
  console.log(re)
  point.style.left=`${eve.pageX-re.left}px`
  point.style.top=eve.pageY-re.top+'px'
})
document.querySelector(".varity3").addEventListener("mousemove",(eve)=>{
  var point=document.querySelector(".varity .hover3");
  var re=document.querySelector(".varity3").getBoundingClientRect()
  console.log(eve.pageX)
  console.log(eve.pageY)
  console.log(re)
  point.style.left=`${eve.pageX-re.left}px`
  point.style.top=eve.pageY-re.top+'px'
})
document.querySelector(".varity4").addEventListener("mousemove",(eve)=>{
  var point=document.querySelector(".varity .hover4");
  var re=document.querySelector(".varity4").getBoundingClientRect()
  console.log(eve.pageX)
  console.log(eve.pageY)
  console.log(re)
  point.style.left=`${eve.pageX-re.left}px`
  point.style.top=eve.pageY-re.top+'px'
})
document.querySelector(".varity5").addEventListener("mousemove",(eve)=>{
  var point=document.querySelector(".varity .hover5");
  var re=document.querySelector(".varity5").getBoundingClientRect()
  console.log(eve.pageX)
  console.log(eve.pageY)
  console.log(re)
  point.style.left=`${eve.pageX-re.left}px`
  point.style.top=eve.pageY-re.top+'px'
})
gsap.from('#page4 .varity .vartext p', {
  transform:"translate(0%,150%)",
  opacity:'0',
  // duration: 2,
  scrollTrigger: {
    trigger: '#page4',
    scroller:'#main',
    start: 'top 50%',
    end: 'top 30%',
    scrub:5,
  },
})