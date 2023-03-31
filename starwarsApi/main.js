const personagemName = document.querySelector('.personagem__name');
const personagemheight = document.querySelector('.personagem__height');
const personagemMass = document.querySelector('.personagem__mass');
const personagemHairColor = document.querySelector('.personagem__haircolor');
const personagemSkinColor = document.querySelector('.personagem__skincolor');
const personagemEyeColor = document.querySelector('.personagem__eyecolor');
const personagemBirthYear = document.querySelector('.personagem__birth');
const personagemGender = document.querySelector('.personagem__gender');
const personagemImage = document.querySelector('.personagem');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPersonagem = 1;

const buscaPersonagem = async (people) => {
  const apiResponse = await fetch(`https://swapi.dev/api/people/${people}`);
  const data = await apiResponse.json();
  return data;
};

const mostraPersonagem = async (people) => {
  const data = await buscaPersonagem(people);

  personagemName.innerHTML = data.name;
  personagemheight.innerHTML = data.height;
  personagemMass.innerHTML = data.mass;
  personagemHairColor.innerHTML = data.hair_color;
  personagemSkinColor.innerHTML = data.skin_color;
  personagemEyeColor.innerHTML = data.eye_color;
  personagemBirthYear.innerHTML = data.birth_year;
  personagemGender.innerHTML = data.gender;
  personagemImage.src = `https://starwars-visualguide.com/assets/img/characters/${data.url.match(
    /\d+/
  )}.jpg`;

  
  
  personagemGender.innerHTML = genderMapping[data.gender];
};

function handlePrevButtonClick() {
  if (searchPersonagem > 1) {
    searchPersonagem -= 1;
    mostraPersonagem(searchPersonagem);
  }
}

function handleNextButtonClick() {
  searchPersonagem += 1;
  mostraPersonagem(searchPersonagem);
}

buttonPrev.removeEventListener('click', handlePrevButtonClick);
buttonNext.removeEventListener('click', handleNextButtonClick);

buttonPrev.addEventListener('click', handlePrevButtonClick);
buttonNext.addEventListener('click', handleNextButtonClick);

mostraPersonagem(searchPersonagem);
