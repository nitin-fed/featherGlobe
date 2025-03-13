

export const fetchData = async (payload) => {
  const { setLoading, setPhotos, signal } = payload;
  setLoading(true);
  try {
    const response = await fetch("http://localhost:5001/photos", { signal });
    const newData = await response.json();
    setPhotos((photosJSON) => [...photosJSON, ...newData]);
    setLoading(false);
    // setPage(prevPage => prevPage + 1);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Loading completed");
    setLoading(false);
  }
};

export const throttle = (func, delay) => {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFun = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFun, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    func(...args);
    setTimeout(timeoutFun, delay);
    shouldWait = true;
  };
};

// Returns if scrolling up / down ( No fetch call if scrolling up)
let lastScrollTop = 0;
export const getScrollDirection = () => {
  let direction = "";
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    direction = "down";
  } else if (scrollTop < lastScrollTop) {
    direction = "up";
  } else {
    console.log("No vertical scrolling");
  }
  lastScrollTop = scrollTop;
  return direction;
};
