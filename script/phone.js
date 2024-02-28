const LoadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};
const loadingContainer = document.getElementById("loading-container");
const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  console.log(isShowAll);
  if ((isShowAll != true)) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="Shoes"
      class="rounded-xl"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Details</button>
    </div>
  </div>
    `;
    loadingContainer.classList.add("hidden");
    phoneContainer.appendChild(phoneCard);
  });
};

const handleShowAll = () => {
  handleSearchButton(true);
};

const handleSearchButton = (isShowAll) => {
  loadingContainer.classList.remove("hidden");
  const searchField = document.getElementById("search-field");
  const searchFieldText = searchField.value;
  LoadPhone(searchFieldText, isShowAll);
};
