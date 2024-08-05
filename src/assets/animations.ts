import gsap from 'gsap';

function onEnterFn(el: Element, done: () => void) {
  gsap.to(el, {
    opacity: 1,
    height: 'auto',
    delay: parseFloat((el as HTMLElement).dataset.index || '0') * 0.15,
    onComplete: done,
  });
}

function onLeaveFn(el: Element, done: () => void) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: parseFloat((el as HTMLElement).dataset.index || '0') * 0.15,
    onComplete: done,
  });
}

function onBeforeEnterFn(el: Element) {
  (el as HTMLElement).style.opacity = '0';
  (el as HTMLElement).style.height = '0';
}

export { onEnterFn, onLeaveFn, onBeforeEnterFn };
