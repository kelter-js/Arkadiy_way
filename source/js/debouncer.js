const debouncer = (func, delay) => {
  let condition = false;
  let timer;
  return (arg) => {
    if (condition) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        condition = false;
      }, delay);
      return;
    }
    func(arg);
    condition = true;
    timer = setTimeout(() => condition = false, delay);
  }
}

export {debouncer}
