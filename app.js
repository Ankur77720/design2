function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locoTrigger();
gsap.to("#page2 img", {
  duration: 1,
  scale: 1.12,
  scrollTrigger: {
    trigger: "#page2 img",
    scroller: "#main",
    scrub: true,
    start: "top 70%",
    end: "top  0%",
  },
});

$("#page1 #mainText h1").textillate({
  in: {
    effect: "fadeInUp",
  },
});
$("#page1 #subText1 h1").textillate({
  in: { effect: "fadeInUp" },
});
$("#page1 #subText2 h1").textillate({ in: { effect: "fadeInUp" } });

gsap.to("#page3 #text", {
  scrollTrigger: {
    trigger: "#page3 #text",
    scroller: "#main",
    start: "top 70%",
    end: "top 70%",
    scrub: true,

    onEnter: () => {
      document.querySelector("#page3 #text").style.transform =
        "translate(-50%,-70%)";
      document.querySelector("#page3 #text").style.opacity = "1";
    },
    onEnterBack: () => {
      document.querySelector("#page3 #text").style.transform =
        "translate(-50%,-50%)";
      document.querySelector("#page3 #text").style.opacity = "0";
    },
  },
});
gsap.to("#page4 hr", {
  width: "86%",
  scrollTrigger: {
    trigger: "#page4 hr",
    scroller: "#main",
    start: "top 95%",
    end: "center 94%",
    scrub: true,
  },
  onEnterBack: () => {
    document.querySelector("#page4 hr").style.width = "0%";
  },
});
var menu = document.querySelector("#menu");
var navi = document.querySelector("#nav i");
var fullNav = document.querySelector("#fullScreenMenu");
var Nav = document.querySelector("nav");
menu.addEventListener("click", function () {
  fullNav.style.transform = `translateY(0%)`;
  Nav.style.display = `none`;
});
navi.addEventListener("click", function () {
  fullNav.style.transform = `translateY(-100%)`;
  Nav.style.display = `flex`;
});
document.querySelector(".varity").addEventListener("mousemove", (eve) => {
  var point = document.querySelector(".varity .hover");
  var re = document.querySelector(".varity").getBoundingClientRect();

  point.style.left = `${eve.pageX - re.left}px`;
  point.style.top = eve.pageY - re.top + "px";
});
document.querySelector(".varity2").addEventListener("mousemove", (eve) => {
  var point = document.querySelector(".varity .hover2");
  var re = document.querySelector(".varity2").getBoundingClientRect();

  point.style.left = `${eve.pageX - re.left}px`;
  point.style.top = eve.pageY - re.top + "px";
});
document.querySelector(".varity3").addEventListener("mousemove", (eve) => {
  var point = document.querySelector(".varity .hover3");
  var re = document.querySelector(".varity3").getBoundingClientRect();
  point.style.left = `${eve.pageX - re.left}px`;
  point.style.top = eve.pageY - re.top + "px";
});
document.querySelector(".varity4").addEventListener("mousemove", (eve) => {
  var point = document.querySelector(".varity .hover4");
  var re = document.querySelector(".varity4").getBoundingClientRect();

  point.style.left = `${eve.pageX - re.left}px`;
  point.style.top = eve.pageY - re.top + "px";
});
document.querySelector(".varity5").addEventListener("mousemove", (eve) => {
  var point = document.querySelector(".varity .hover5");
  var re = document.querySelector(".varity5").getBoundingClientRect();

  point.style.left = `${eve.pageX - re.left}px`;
  point.style.top = eve.pageY - re.top + "px";
});

gsap.to("#page4 .varity .vartext", {
  scrollTrigger: {
    trigger: "#page4 .varity .vartext",
    scroller: "#main",
    start: "top 50%",
    end: "top 50%",
    scrub: true,

    onEnter: () => {
      document.querySelectorAll("#page4 .varity .vartext").forEach((el) => {
        el.style.transform = "translate(0%,0%)";
        el.style.opacity = "1";
      });
    },
    onEnterBack: () => {
      document.querySelectorAll("#page4 .varity .vartext").forEach((el) => {
        el.style.transform = "translate(100%,0%)";
        el.style.opacity = "0";
      });
    },
  },
});
