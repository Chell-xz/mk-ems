// Select DOM elements
const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

// Global variables for tracking drag events
let isDragging = false,
  startY,
  startHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(40);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
  // Toggles the fullscreen class to bottomSheet if the height is equal to 100
  bottomSheet.classList.toggle("fullscreen", height === 40);
};

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  document.body.style.overflowY = "auto";
};

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
  isDragging = true;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheet.classList.add("dragging");
};

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newHeight = startHeight + (delta / window.innerHeight) * 40;
  updateSheetHeight(newHeight);
};

// Determines whether to hide, set to fullscreen, or set to default
// height based on the current height of the sheet content
const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 30 ? hideBottomSheet() : sheetHeight > 30 ? updateSheetHeight(40) : updateSheetHeight(50);
};

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);

function Mkxxx() {
  Swal.fire({
    title: "Warning!",
    text: "Sedang Dalam Perbaikan!",
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Tutup",
    confirmTextColor: "#d33",
  });
}

/// Function Contact - Links ///

function MkxAbout() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://ems-links.netlify.app/about/");
}

function MkxBlog() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://mk-links.netlify.app/");
}
function MkxSpfy() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw");
}
function MkxHeal() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://ems-links.netlify.app/about/mkx/heal/");
}
function DscX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://discord.gg/MarchellKevandra");
}
function IntX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://instagram.com/chellgnzxz_");
}
function FbX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://facebook.com/marchel.ganz");
}
function TtX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://tiktok.com/@mkxchl");
}
function TlX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://t.me/Marchell_Junior");
}
