
/******* Home ********/
const dropdownTwo = document.getElementById('dropdownTwo');
const ulTwo = document.getElementById('ulTwo');
const aClick = document.getElementById("a-click");
const iDeg = document.getElementById("iDeg");
const iDegTwo = document.getElementById("iDegTwo")
 const aClickLg = document.getElementById("a-click-lg");
 const iDegLg = document.getElementById("iDeg-lg");
const dropdownmenuId = document.getElementById("dropdown-menuId");
 let parent = document.getElementById("parent");
 let son = document.getElementById("son");
let icona = document.getElementById("icona");
 const nav = document.getElementById("nav");
const beginning = document.getElementById("beginning");
const colImg = document.getElementById("col-img");
 const lis = document.querySelectorAll(".Family-Health-Care ul li");
const rows = document.querySelectorAll(".Family-Health-Care .row-one");
 let pos = document.getElementById("pos");
let tath = document.getElementById("tath");
 const pxSections = document.querySelector(".pxSections");

dropdownTwo.addEventListener('mouseenter', () => {
    ulTwo.classList.remove('d-none')
    iDegTwo.classList.remove("bi-chevron-left");
    iDegTwo.classList.add("bi-chevron-down");
})
ulTwo.addEventListener('mouseleave', () => {
    ulTwo.classList.add("d-none");
    iDegTwo.classList.add("bi-chevron-left");
    iDegTwo.classList.remove("bi-chevron-down");
})
/* دى بتحل مشكلة انى حتى لو عملت كليك على اللينك دا ميقفلش ال dropdown*/
 dropdownTwo.addEventListener("click", (event) => {
   event.preventDefault();
   event.stopPropagation();
   ulTwo.classList.toggle("d-none");
   iDegTwo.classList.toggle("bi-chevron-left");
   iDegTwo.classList.toggle("bi-chevron-down");
 });

document.addEventListener('click', () => {
    if (aClick.classList.contains('show')) {
        iDeg.classList.remove('bi-chevron-left')
        iDeg.classList.add("bi-chevron-down");
    } else {
        iDeg.classList.add("bi-chevron-left");
        iDeg.classList.remove("bi-chevron-down");
    }
 })

aClickLg.addEventListener('mouseenter', () => {
     iDegLg.classList.remove("bi-chevron-left");
    iDegLg.classList.add("bi-chevron-down");
    // iDegLg.style.backgroundColor = "#F0F5FF";
})
dropdownmenuId.addEventListener("mouseleave", () => {
    iDegLg.classList.remove("bi-chevron-down");
  iDegLg.classList.add("bi-chevron-left");
  // iDegLg.style.backgroundColor = "transparent";
});
//search 
 son.addEventListener("focus", function () {
   parent.style.cssText = `
  transition:0.3s;
  color: #212529;
    background-color: #fff;
    border-color: #d99c39;
    box-shadow: 0 0 0 0.25rem #0564fb47;
  `;
 });
 son.addEventListener("blur", function () {
   parent.style.cssText = `
  transition:0.3s;
  color: none;
    background-color: none;
    border-color: none;
    box-shadow:none;
  `;
 });
 //حركة كدا في السيرشاية
son.style.cssText = `
max-width:0;
transition: 0.3s;
`;
icona.style.cursor = "pointer";
icona.addEventListener("click", function () {
    son.style.maxWidth = "150px";
  son.focus();
});
son.addEventListener("blur", function () {
    this.style.maxWidth = "0";
 })



//Family-Health-Care
Array.from(lis).forEach((ele ,idx) => {
  ele.addEventListener('click', (element) => {
    Array.from(lis).forEach((el) => {el.classList.remove('active') })
    Array.from(rows).forEach((el) => {el.classList.add('d-none') })
    element.target.classList.add('active')
    rows[idx].classList.remove('d-none')
  })
})

//map


try {
  pos.addEventListener("click", () => {
  let liveMap;
  if (navigator.geolocation) {
    liveMap = navigator.geolocation.watchPosition(function (position) {
      tath.innerHTML = `
    <iframe class="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27628.787945417647!2d${position.coords.longitude}!3d${position.coords.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1704648149440!5m2!1sar!2seg" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
      console.log(position);
    });
  }
});
} catch (err) {
  console.log(err)
}


/* First section below navbar */
pxSections.style.marginTop = nav.offsetHeight + "px";


/*video*/
// const players = document.querySelectorAll(".video-player");

// players.forEach((player) => {
//   new Plyr(player, {
//     controls: [
//       "play-large",
//       "play",
//       "progress",
//       "current-time",
//       "captions",
//       "pip",
//       "airplay",
//       "fullscreen",
//     ],
//     youtube: {
//       noCookie: true,
//       rel: 0,
//       showinfo: 0,
//       iv_load_policy: 3,
//     },
//   });
// });

// const videoThum = document.querySelector(".video-thumbnail"); // صورة الفيديو
// const videoModal = document.querySelector(".modeling"); // المودال
// const videoFrame = videoModal.querySelector("iframe");

// // وظيفة لفتح المودال عند النقر على الصورة المصغرة
// videoThum.addEventListener("click", () => {
//   if (videoModal.classList.contains("d-none")) {
//     videoModal.classList.remove("d-none"); // إظهار المودال
//   }
// });

// // إغلاق المودال عند النقر خارج محتوى المودال
// window.addEventListener("click", (event) => {
//   // تحقق إذا كان المودال مرئي
//   if (!videoModal.classList.contains("d-none")) {
//     const modalContent = videoModal.querySelector(".modal-content"); // محتوى المودال
//     // تحقق إذا كان النقر خارج محتوى المودال بالكامل
//     if (!modalContent.contains(event.target)) {
//       console.log("Closing Modal");
//       videoModal.classList.add("d-none"); // إخفاء المودال
//       videoFrame.src = ""; // إزالة الرابط من iframe لإيقاف الفيديو
//     }
//   }
// });









  // const videoThumbnails = document.querySelectorAll('.video-thumbnail');

  // // إظهار المودال عند الضغط على الصورة المصغرة
  // videoThumbnails.forEach((thumbnail) => {
  //   thumbnail.addEventListener('click', () => {
  //     // العثور على المودال المناسب
  //     const modal = thumbnail.closest('.col-lg-3').querySelector('.modeling');
  //     const iframe = modal.querySelector('iframe');
  //     const tiktokEmbed = modal.querySelector('blockquote');
  
  //     // إظهار المودال
  //     modal.classList.remove('d-none');
  
  //     // إذا كان هناك iframe، قم بتحديث src
  //     if (iframe) {
  //       iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
  //     }
  
  //     // إعادة تحميل فيديو تيك توك إذا كان موجودًا
  //     if (tiktokEmbed) {
  //       const newEmbed = tiktokEmbed.cloneNode(true);
  //       tiktokEmbed.parentNode.replaceChild(newEmbed, tiktokEmbed);
  //       // إعادة تحميل النص البرمجي الخاص بتيك توك
  //       const script = document.createElement('script');
  //       script.src = 'https://www.tiktok.com/embed.js';
  //       document.body.appendChild(script);
  //     }
  //   });
  // });
  
  // // إغلاق المودال عند الضغط خارج الفيديو
  // document.querySelectorAll('.modeling').forEach((modal) => {
  //   modal.addEventListener('click', (event) => {
  //     if (!event.target.closest('.modal-content')) {
  //       modal.classList.add('d-none');
  //       // إعادة تعيين src لإيقاف الفيديو
  //       const iframe = modal.querySelector('iframe');
  //       if (iframe) {
  //         iframe.src = iframe.src; // إيقاف الفيديو
  //       }
  //     }
  //   });
  // });
  


// الحصول على العناصر الضرورية
// const videoThumbnails = document.querySelectorAll('.video-thumbnail');
// const modals = document.querySelectorAll('.modeling');

// // إظهار المودال عند الضغط على الصورة المصغرة
// videoThumbnails.forEach((thumbnail) => {
//   thumbnail.addEventListener('click', () => {
//     const modal = thumbnail.nextElementSibling; // العثور على المودال الخاص بالصورة المصغرة
//     const iframe = modal.querySelector('iframe');

//     // قراءة رابط الفيديو من data-video-url (إذا كان موجودًا)
//     const videoUrl = thumbnail.getAttribute('data-video-url');
//     if (videoUrl) {
//       iframe.src = videoUrl; // تعيين الرابط إلى iframe
//     }

//     // إظهار المودال
//     modal.classList.remove('d-none');
//   });
// });

// // إغلاق المودال عند الضغط على زر الإغلاق أو خارج المحتوى
// modals.forEach((modal) => {
//   const closeButton = modal.querySelector('.close-modal'); // زر الإغلاق

//   // عند الضغط خارج الفيديو
//   modal.addEventListener('click', (event) => {
//     if (!event.target.closest('.modal-content')) {
//       closeModal(modal);
//     }
//   });

//   // عند الضغط على زر الإغلاق
//   closeButton.addEventListener('click', () => {
//     closeModal(modal);
//   });
// });

// // دالة لإغلاق المودال
// function closeModal(modal) {
//   modal.classList.add('d-none'); // إخفاء المودال
//   const iframe = modal.querySelector('iframe');
//   if (iframe) iframe.src = ""; // إعادة تعيين src لإيقاف الفيديو
// }








// الحصول على العناصر الضرورية
const videoThumbnails = document.querySelectorAll('.video-thumbnail');

// إظهار المودال عند الضغط على الصورة المصغرة
videoThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // العثور على المودال المناسب
    const modal = thumbnail.closest('.col-lg-3').querySelector('.modeling');
    const iframe = modal.querySelector('iframe');
    const tiktokEmbed = modal.querySelector('blockquote');

    // إظهار المودال
    modal.classList.remove('d-none');

    // إذا كان هناك iframe، قم بتحديث src
    if (iframe) {
      iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
    }

    // إعادة تحميل فيديو تيك توك إذا كان موجودًا
    if (tiktokEmbed) {
      const newEmbed = tiktokEmbed.cloneNode(true);
      tiktokEmbed.parentNode.replaceChild(newEmbed, tiktokEmbed);
      // إعادة تحميل النص البرمجي الخاص بتيك توك
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      document.body.appendChild(script);
    }
  });
});

// إغلاق المودال عند الضغط خارج الفيديو
document.querySelectorAll('.modeling').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (!event.target.closest('.modal-content')) {
      modal.classList.add('d-none');
      // إعادة تعيين src لإيقاف الفيديو
      const iframe = modal.querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src; // إيقاف الفيديو
      }
    }
  });
});


