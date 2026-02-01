let imagesByPath = {};
let currentImageIndex = 0;
let currentPath = '';

console.log('Lightbox plugin loaded');

function preloadImage(url) {
  console.log('Lightbox plugin: Preloading image:', url);
  const img = new Image();
  img.src = url;
}

function preloadAllImages() {
  console.log('Lightbox plugin: Preloading all images for path:', currentPath);
  const images = imagesByPath[currentPath] || [];
  console.log(`Lightbox plugin: Found ${images.length} images to preload.`);
  images.forEach(image => {
    const imgElement = image.querySelector('img');
    const imageUrl = imgElement?.getAttribute('src') || imgElement?.getAttribute('data-src');
    if (imageUrl) {
      preloadImage(imageUrl);
    } else {
      console.log('Lightbox plugin: No image URL found for element:', image);
    }
  });
}

function updateCurrentPath() {
  console.log('Lightbox plugin: Updating current path.');
  currentPath = publish.currentFilepath;
  console.log('Lightbox plugin: Current path is:', currentPath);
  if (!imagesByPath[currentPath]) {
    console.log('Lightbox plugin: Initializing images for path:', currentPath);
    imagesByPath[currentPath] = [];
    preloadAllImages();
  }
}

publish.registerMarkdownPostProcessor(async (el, ctx) => {
  console.log('Lightbox plugin: registerMarkdownPostProcessor called.');
  updateCurrentPath();

  const blockImages = Array.from(el.querySelectorAll('.internal-embed')).filter(span => /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(span.getAttribute('src')));
  console.log(`Lightbox plugin: Found ${blockImages.length} block images.`);

  blockImages.forEach((span) => {
    if (!span.classList.contains('processed')) {
      console.log('Lightbox plugin: Processing new image:', span.getAttribute('src'));
      span.classList.add('processed');
      imagesByPath[currentPath].push(span);

      span.addEventListener('click', function() {
        console.log('Lightbox plugin: Image clicked:', this.getAttribute('src'));
        currentImageIndex = imagesByPath[currentPath].indexOf(this);
        console.log('Lightbox plugin: Current image index:', currentImageIndex);
        const lightboxDiv = document.createElement('div');
        lightboxDiv.classList.add('lightbox');
        const contentToMove = this.cloneNode(true);
        lightboxDiv.appendChild(contentToMove);
        document.body.appendChild(lightboxDiv);
        console.log('Lightbox plugin: Lightbox created and appended to body.');

        let startX;
        lightboxDiv.addEventListener('touchstart', e => {
          startX = e.touches[0].clientX;
        });

        lightboxDiv.addEventListener('touchend', e => {
          const endX = e.changedTouches[0].clientX;
          if (startX - endX > 50) {
            // Swipe left
            console.log('Lightbox plugin: Swipe left detected.');
            currentImageIndex = (currentImageIndex + 1) % imagesByPath[currentPath].length;
          } else if (startX - endX < -50) {
            // Swipe right
            console.log('Lightbox plugin: Swipe right detected.');
            currentImageIndex = (currentImageIndex - 1 + imagesByPath[currentPath].length) % imagesByPath[currentPath].length;
          }
          lightboxDiv.innerHTML = '';
          const newContent = imagesByPath[currentPath][currentImageIndex].cloneNode(true);
          lightboxDiv.appendChild(newContent);
          console.log('Lightbox plugin: Lightbox content updated after swipe.');
        });

        const removeLightbox = () => {
          console.log('Lightbox plugin: Removing lightbox.');
          document.body.removeChild(lightboxDiv);
          document.removeEventListener('keydown', keyListener);
        };

        lightboxDiv.addEventListener('click', removeLightbox);

        const keyListener = (event) => {
          const images = imagesByPath[currentPath] || [];
          if (event.key === "Escape") {
            console.log('Lightbox plugin: Escape key pressed.');
            removeLightbox();
          } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            console.log(`Lightbox plugin: Arrow key pressed: ${event.key}`);
            if (event.key === "ArrowRight") {
              currentImageIndex = (currentImageIndex + 1) % images.length;
            } else {
              currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            }
            lightboxDiv.innerHTML = '';
            const newContent = images[currentImageIndex].cloneNode(true);
            lightboxDiv.appendChild(newContent);
            console.log('Lightbox plugin: Lightbox content updated after arrow key.');
          }
          if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
          }
        };

        document.addEventListener('keydown', keyListener);
      });
    } else {
        console.log('Lightbox plugin: Image already processed:', span.getAttribute('src'));
    }
  });
});

/* ----------------------------------------------------------------------- */
/* FANTASY WORD GENERATOR
/* ----------------------------------------------------------------------- */

const fantasyPrefixes = ['Zar', 'Vor', 'Grak', 'Fel', 'Mor', 'Syl', 'Val', 'Kry', 'Eth', 'Aer', 'Bel', 'Cor'];
const fantasyMiddles = ['on', 'ar', 'en', 'il', 'ath', 'yr', 'us', 'or', 'an', 'el'];
const fantasySuffixes = ['ia', 'os', 'dor', 'gar', 'ath', 'or', 'is', 'us', 'an', 'ion', 'tor'];

function generateFantasyWord() {
  const prefix = fantasyPrefixes[Math.floor(Math.random() * fantasyPrefixes.length)];
  const middle = fantasyMiddles[Math.floor(Math.random() * fantasyMiddles.length)];
  const suffix = fantasySuffixes[Math.floor(Math.random() * fantasySuffixes.length)];
  
  if (Math.random() > 0.5) {
    return prefix + suffix;
  }
  return prefix + middle + suffix;
}

publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const generatorContainer = el.querySelector('#fantasy-word-generator');
  if (generatorContainer && !generatorContainer.hasAttribute('data-processed')) {
    console.log('Fantasy word generator button added.');
    generatorContainer.setAttribute('data-processed', 'true');

    const button = document.createElement('button');
    button.textContent = 'Generate Fantasy Word';
    
    const outputSpan = document.createElement('span');
    outputSpan.style.marginLeft = '10px';
    outputSpan.style.fontWeight = 'bold';
    outputSpan.textContent = '...';

    button.addEventListener('click', () => {
      outputSpan.textContent = generateFantasyWord();
    });

    generatorContainer.innerHTML = ''; // Clear the container
    generatorContainer.appendChild(button);
    generatorContainer.appendChild(outputSpan);
  }
});

/* ----------------------------------------------------------------------- */
/* SPELL INVENTION GENERATOR
/* ----------------------------------------------------------------------- */

const spellAdjectives = [
  "Binding", "Flaming", "Charming", "Cryptic", "Freezing", "Unseen",
  "Slowing", "Silent", "Withering", "Seeping", "Mesmerising", "Oozing",
  "Shimmering", "Wrathful", "Dazzling", "Primal", "Ferocious", "Expanding",
  "Shielding", "Petrifying", "Piercing", "Screaming", "Grasping", "Swift",
  "Curious", "Hungry", "Jovial", "Thunderous", "Venomous", "Phantom",
  "Shadowy", "Majestic", "Frenzied", "Prismatic", "Sickening", "Terrible"
];
const spellMaterials = [
  "Oil", "Crystal", "Slime", "Light", "Doom", "Pain",
  "Earth", "Air", "Fungus", "Hex", "Smoke", "Energy",
  "Lore", "Fire", "Death", "Blight", "Sight", "Feeling",
  "Lightning", "Spirit", "Stasis", "Terror", "Mist", "Bone",
  "Ash", "Acid", "Sound", "Mind", "Vermin", "Flesh",
  "Thorn", "Vine", "Water", "Draught", "Wood", "Worm"
];
const spellForms = [
  "Beacon", "Ring", "Chains", "Eye", "Cascade", "Bubble",
  "Servant", "Crown", "Word", "Aura", "Shield", "Hand",
  "Vision", "Disk", "Fang", "Gust", "Swarm", "Dance",
  "Sentinel", "Web", "Gate", "Whispers", "Pillar", "Explosion",
  "Ray", "Guide", "Wall", "Wings", "Claw", "Mask",
  "Poison", "Embers", "Dark", "Wave", "Dream", "Rot"
];

function generateSpellInventionWords() {
  const adjective = spellAdjectives[Math.floor(Math.random() * spellAdjectives.length)];
  const material = spellMaterials[Math.floor(Math.random() * spellMaterials.length)];
  const form = spellForms[Math.floor(Math.random() * spellForms.length)];
  return { adjective, material, form };
}

publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const spellContainer = el.querySelector('#spell-invention-generator');
  if (spellContainer && !spellContainer.hasAttribute('data-processed')) {
    console.log('Spell invention generator button added.');
    spellContainer.setAttribute('data-processed', 'true');

    const button = document.createElement('button');
    button.textContent = 'Invent Spell';
    
    const outputDiv = document.createElement('div');
    outputDiv.style.marginTop = '10px';

    const adjectiveP = document.createElement('p');
    const materialP = document.createElement('p');
    const formP = document.createElement('p');

    outputDiv.appendChild(adjectiveP);
    outputDiv.appendChild(materialP);
    outputDiv.appendChild(formP);

    button.addEventListener('click', () => {
      const spell = generateSpellInventionWords();
      adjectiveP.innerHTML = `<strong>Adjective:</strong> ${spell.adjective}`;
      materialP.innerHTML = `<strong>Material:</strong> ${spell.material}`;
      formP.innerHTML = `<strong>Form:</strong> ${spell.form}`;
    });

    spellContainer.innerHTML = ''; // Clear the container
    spellContainer.appendChild(button);
    spellContainer.appendChild(outputDiv);
    
    // Initial generation
    button.click();
  }
});

/* ----------------------------------------------------------------------- */
/* GOD GENERATOR
/* ----------------------------------------------------------------------- */

const godDomains = [
  "Animal", "Authority", "Battle", "Blood", "Creation", "Death",
  "Element", "Fate", "Forge", "Greed", "Harvest", "Knowledge",
  "Love", "Nobility", "Purity", "Storm", "Trickery", "Undeath",
  "Vengeance", "Wilds"
];
const godElements = [
  "Fire", "Water", "Earth", "Air", "Ice", "Lightning", "Ooze",
  "Magma", "Radiance", "Shadow", "Uranium"
];
const godAnimals = [
  "Wolfs", "Bears", "Eagles", "Boar", "Serpents", "Stags", "Spiders",
  "Gryphons", "Manticores", "Chimeras"
];
const godGodTypes = [
  "godling", "demigod", "god", "forgotten god", "elder god", "fallen god"
];
const godTraits = [
  "Wrathful", "Petty", "Lustful", "Vengeful", "Magnanimous", "Fickle"
];
const godQuestions = {
  "demigod": "how does their ambition show?",
  "godling": "they are obviously the bottom of the divine food chain, how can you tell?",
  "god": "they are famously {trait}, what affirmation have you experienced?",
  "forgotten god": "how did you find them?",
  "fallen god": "what instigated their downfall?",
  "elder god": "what gives away their age?"
};

function generateGod() {
  // Select God Type
  const godType = godGodTypes[Math.floor(Math.random() * godGodTypes.length)];

  // Generate Question based on God Type
  let questionText = godQuestions[godType];
  if (godType === 'god') {
    const trait = godTraits[Math.floor(Math.random() * godTraits.length)];
    questionText = questionText.replace('{trait}', trait);
  }
  const question = questionText;

  // Select two different domains
  let d1Index = Math.floor(Math.random() * godDomains.length);
  let d2Index;
  do {
    d2Index = Math.floor(Math.random() * godDomains.length);
  } while (d1Index === d2Index);

  const d1 = godDomains[d1Index];
  const d2 = godDomains[d2Index];

  let displayDomain1, displayDomain2;

  // Handle subtypes for Animal and Element domains
  if (d1 === 'Animal') {
    displayDomain1 = godAnimals[Math.floor(Math.random() * godAnimals.length)];
  } else if (d1 === 'Element') {
    displayDomain1 = godElements[Math.floor(Math.random() * godElements.length)];
  } else {
    displayDomain1 = d1;
  }

  if (d2 === 'Animal') {
    displayDomain2 = godAnimals[Math.floor(Math.random() * godAnimals.length)];
  } else if (d2 === 'Element') {
    displayDomain2 = godElements[Math.floor(Math.random() * godElements.length)];
  } else {
    displayDomain2 = d2;
  }

  return {
      godType,
      domain1: d1,
      domain2: d2,
      displayDomain1,
      displayDomain2,
      question
  };
}

publish.registerMarkdownPostProcessor(async (el, ctx) => {
    const godContainer = el.querySelector('#god-generator');
    if (godContainer && !godContainer.hasAttribute('data-processed')) {
        console.log('God generator button added.');
        godContainer.setAttribute('data-processed', 'true');

        const button = document.createElement('button');
        button.textContent = 'Generate God';

        const outputDiv = document.createElement('div');
        outputDiv.style.marginTop = '10px';

        const mainP = document.createElement('p');
        const blessingP = document.createElement('p');

        outputDiv.appendChild(mainP);
        outputDiv.appendChild(blessingP);

        button.addEventListener('click', () => {
            const god = generateGod();

            const domain1Link = document.createElement('a');
            const anchor1 = `#${god.domain1}+Domain`;
            domain1Link.className = 'internal-link';
            domain1Link.setAttribute('data-href', anchor1);
            domain1Link.href = anchor1;
            domain1Link.textContent = god.displayDomain1;

            const domain2Link = document.createElement('a');
            const anchor2 = `#${god.domain2}+Domain`;
            domain2Link.className = 'internal-link';
            domain2Link.setAttribute('data-href', anchor2);
            domain2Link.href = anchor2;
            domain2Link.textContent = god.displayDomain2;

            mainP.innerHTML = `The ${god.godType} of `;
            mainP.appendChild(domain1Link);
            mainP.append(" & ");
            mainP.appendChild(domain2Link);
            mainP.append(`, ${god.question}.`);
            
            blessingP.innerHTML = `Blessing: Gain a Fleeting Luck when you adhere to one of their mandates at your own expense.`;
        });

        godContainer.innerHTML = ''; // Clear the container
        godContainer.appendChild(button);
        godContainer.appendChild(outputDiv);

        // Initial generation
        button.click();
    }
});
