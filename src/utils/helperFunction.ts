export function debounce(fn: () => void, delayTime: number) {
  let timeout: any;
  return function (...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delayTime);
  };
}

export function addVisibilityAnimation(elementQuery) {
  let visible = false;
  return function temp() {
    const cta = document.querySelector(elementQuery) as HTMLElement;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollY > viewportHeight/2 && !visible) {
      cta.style.opacity = "1";
      visible = true;
    } else if (scrollY <= viewportHeight/2 && visible) {
      cta.style.opacity = "0";
      visible = false;
    }
  };
}
