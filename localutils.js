// https://github.com/Kelin2025/vue-responsive-components
// export const ResponsiveMixin = {
//   data() {
//     return {
//       el: {
//         width: 0,
//         height: 0,
//         is: {}
//       }
//     }
//   },
//   mounted() {
//     if (
//       typeof process === "undefined" ||
//       (!process.server && (this.breakpoints || this.$options.breakpoints))
//     ) {
//       this.$nextTick(() => {
//         const handleResize = throttle(entries => {
//           const cr = entries[0].contentRect
//           ;(this.el.width = cr.width), (this.el.height = cr.height)
//           const conds = Object.assign(
//             {},
//             this.breakpoints || {},
//             this.$options.breakpoints || {}
//           )
//           for (const breakpoint in conds) {
//             this.$set(this.el.is, breakpoint, conds[breakpoint](this.el))
//           }
//         }, 200)

//         const observer = new ResizeObserver(handleResize)
//         if (this.$el instanceof Element) {
//           observer.observe(this.$el)
//         }
//       })
//     }
//   }
// }

// export const Responsive = {
//   data() {
//     return { init: false }
//   },
//   props: {
//     noHide: { type: Boolean, default: false },
//     breakpoints: { type: Object, default: undefined }
//   },
//   mixins: [ResponsiveMixin],
//   render(h) {
//     const slot =
//       (this.$scopedSlots.default && this.$scopedSlots.default(this.el)) ||
//       this.$slots.default

//     return !this.noHide && !this.init
//       ? h(
//           "div",
//           {
//             style: { visibility: "hidden" }
//           },
//           [slot]
//         )
//       : slot
//   },
//   mounted() {
//     this.init = true
//   }
// }


export const ResponsiveDirective = {
  inserted(el, conds) {
    if (typeof process === "undefined" || !process.server) {
      const handleResize = throttle(entries => {
        const cr = entries[0].contentRect
        for (const breakpoint in conds.value) {
          if (conds.value[breakpoint](cr)) {
            el.classList.add(breakpoint)
          } else {
            el.classList.remove(breakpoint)
          }
        }
      }, 200)
      const observer = new ResizeObserver(handleResize)
      observer.observe(el)
    }
  }
}
  
// export const VueResponsiveComponents = Vue => {
//   Vue.component("Responsive", Responsive)
//   Vue.directive("responsive", ResponsiveDirective)
// }


// _LODASH FUNCTIONS for ResponsiveDirective

/** Detect free variable `global` from Node.js. */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

/** Detect free variable `globalThis` */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** Detect free variable `self`. */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

function isObject(value) {
    const type = typeof value
    return value != null && (type === 'object' || type === 'function')
}

function throttle(func, wait, options) {
    let leading = true
    let trailing = true
  
    if (typeof func !== 'function') {
      throw new TypeError('Expected a function')
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading
      trailing = 'trailing' in options ? !!options.trailing : trailing
    }
    return debounce(func, wait, {
      leading,
      trailing,
      'maxWait': wait
    })
  }

  function debounce(func, wait, options) {
    let lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime
  
    let lastInvokeTime = 0
    let leading = false
    let maxing = false
    let trailing = true
  
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')
  
    if (typeof func !== 'function') {
      throw new TypeError('Expected a function')
    }
    wait = +wait || 0
    if (isObject(options)) {
      leading = !!options.leading
      maxing = 'maxWait' in options
      maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
      trailing = 'trailing' in options ? !!options.trailing : trailing
    }
  
    function invokeFunc(time) {
      const args = lastArgs
      const thisArg = lastThis
  
      lastArgs = lastThis = undefined
      lastInvokeTime = time
      result = func.apply(thisArg, args)
      return result
    }
  
    function startTimer(pendingFunc, wait) {
      if (useRAF) {
        root.cancelAnimationFrame(timerId)
        return root.requestAnimationFrame(pendingFunc)
      }
      return setTimeout(pendingFunc, wait)
    }
  
    function cancelTimer(id) {
      if (useRAF) {
        return root.cancelAnimationFrame(id)
      }
      clearTimeout(id)
    }
  
    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time
      // Start the timer for the trailing edge.
      timerId = startTimer(timerExpired, wait)
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result
    }
  
    function remainingWait(time) {
      const timeSinceLastCall = time - lastCallTime
      const timeSinceLastInvoke = time - lastInvokeTime
      const timeWaiting = wait - timeSinceLastCall
  
      return maxing
        ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting
    }
  
    function shouldInvoke(time) {
      const timeSinceLastCall = time - lastCallTime
      const timeSinceLastInvoke = time - lastInvokeTime
  
      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
    }
  
    function timerExpired() {
      const time = Date.now()
      if (shouldInvoke(time)) {
        return trailingEdge(time)
      }
      // Restart the timer.
      timerId = startTimer(timerExpired, remainingWait(time))
    }
  
    function trailingEdge(time) {
      timerId = undefined
  
      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time)
      }
      lastArgs = lastThis = undefined
      return result
    }
  
    function cancel() {
      if (timerId !== undefined) {
        cancelTimer(timerId)
      }
      lastInvokeTime = 0
      lastArgs = lastCallTime = lastThis = timerId = undefined
    }
  
    function flush() {
      return timerId === undefined ? result : trailingEdge(Date.now())
    }
  
    function pending() {
      return timerId !== undefined
    }
  
    function debounced(...args) {
      const time = Date.now()
      const isInvoking = shouldInvoke(time)
  
      lastArgs = args
      lastThis = this
      lastCallTime = time
  
      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime)
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = startTimer(timerExpired, wait)
          return invokeFunc(lastCallTime)
        }
      }
      if (timerId === undefined) {
        timerId = startTimer(timerExpired, wait)
      }
      return result
    }
    debounced.cancel = cancel
    debounced.flush = flush
    debounced.pending = pending
    return debounced
  }