document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginSection = document.getElementById('login-section');
  const gallerySection = document.getElementById('gallery-section');
  const detailsSection = document.getElementById('details-section');
  const detailsContent = document.getElementById('details-content');

  const placesInfo = {
    pyramids: {
      title: 'Pyramids of Giza',
      text: `
        <p>The Pyramids of Giza are ancient pyramid structures built as tombs for the Pharaohs over 4,500 years ago. They are the last surviving wonder of the Seven Wonders of the Ancient World and a testament to Egypt’s engineering and architectural prowess.</p>
        <p>Located on the Giza Plateau near Cairo, the complex includes the Great Pyramid of Khufu, the Pyramid of Khafre, the Pyramid of Menkaure, and the iconic Sphinx.</p>
      `,
      link: 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza'
    },
    karnak: {
      title: 'Karnak Temple',
      text: `
        <p>Karnak is a vast temple complex in Luxor dedicated primarily to Amun-Ra, the sun god. The site was built and expanded over 2,000 years by various pharaohs, making it one of the largest religious complexes ever constructed.</p>
        <p>Visitors marvel at its hypostyle hall, massive pylons, towering obelisks, and sacred lake, each telling stories of devotion and power from Egypt's golden age.</p>
      `,
      link: 'https://en.wikipedia.org/wiki/Karnak'
    },
    valley: {
      title: 'Valley of the Kings',
      text: `
        <p>The Valley of the Kings served as the royal burial site for pharaohs and powerful nobles of the New Kingdom. It houses over 60 tombs, including the world-famous tomb of Tutankhamun.</p>
        <p>The tombs are decorated with intricate hieroglyphics, offering insights into the beliefs, rituals, and daily life of ancient Egyptians.</p>
      `,
      link: 'https://en.wikipedia.org/wiki/Valley_of_the_Kings'
    },
    abusimbel: {
      title: 'Abu Simbel Temples',
      text: `
        <p>Abu Simbel is a pair of massive rock temples commissioned by Pharaoh Ramses II in southern Egypt. The temples are renowned for their colossal statues and for being relocated entirely to save them from the rising waters of Lake Nasser.</p>
        <p>Twice a year, sunlight illuminates the inner sanctuary, a spectacular alignment showcasing the astronomical knowledge of ancient Egyptians.</p>
      `,
      link: 'https://en.wikipedia.org/wiki/Abu_Simbel'
    },
    siwa: {
      title: 'Siwa Oasis',
      text: `
        <p>Siwa Oasis is a secluded haven in Egypt's Western Desert, famed for its unique Berber culture, natural springs, and the ancient Oracle Temple where Alexander the Great was declared a divine figure.</p>
        <p>Visitors enjoy stunning salt lakes, palm groves, and traditional mud-brick architecture, making Siwa a perfect blend of history, culture, and nature.</p>
      `,
      link: 'https://en.wikipedia.org/wiki/Siwa_Oasis'
    }
  };

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
  });

  document.querySelectorAll('.place').forEach(place => {
    place.addEventListener('click', () => {
      const key = place.getAttribute('data-place');
      const info = placesInfo[key];
      detailsContent.innerHTML = `<h2>${info.title}</h2>${info.text}<p><a href="${info.link}" target="_blank">Learn more</a></p>`;
      gallerySection.classList.add('hidden');
      detailsSection.classList.remove('hidden');
    });
  });

  document.getElementById('back').addEventListener('click', () => {
    detailsSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
  });

  document.getElementById('logout').addEventListener('click', () => {
    gallerySection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  });

  document.getElementById('logout2').addEventListener('click', () => {
    detailsSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
  });
});
