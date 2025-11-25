
let placesList = [
  {
    id: 1,
    name: "El Shifa Hospital",
    type: "Hospital",
    speciality: "General Medicine",
    governorate: "Cairo",
    adress: "12 Tahrir Street",
    phone: "01012345678",
    email: "info@elshifa.com",
    website: "https://elshifa.com",
    latitude: 30.0444,
    longitude: 31.2357,
    workingHours: "24/7",
    description: "Full service general hospital",
    lat: 30.0444,
    lng: 31.2357,
  },
  {
    id: 2,
    name: "Al Noor Pharmacy",
    type: "Pharmacy",
    speciality: "Medicines",
    governorate: "Giza",
    adress: "5 Faisal Street",
    phone: "01198765432",
    email: "contact@alnoor.com",
    website: "https://alnoor.com",
    latitude: 30.0131,
    longitude: 31.2089,
    workingHours: "9 AM - 12 AM",
    description: "Well stocked pharmacy with delivery service",
    lat: 30.0131,
    lng: 31.2089,
  },
  {
    id: 3,
    name: "Life Lab",
    type: "Laboratory",
    speciality: "Medical Analysis",
    governorate: "Alexandria",
    adress: "20 Corniche Road",
    phone: "01234567890",
    email: "support@lifelab.com",
    website: "https://lifelab.com",
    latitude: 31.2001,
    longitude: 29.9187,
    workingHours: "8 AM - 10 PM",
    description: "Advanced medical testing laboratory",
    lat: 31.2001,
    lng: 29.9187,
  },
  {
    id: 4,
    name: "Dr. Sami Clinic",
    type: "Clinic",
    speciality: "Dentistry",
    governorate: "Mansoura",
    adress: "شارع الجيش",
    phone: "01055556666",
    email: "dr.sami@gmail.com",
    website: "",
    latitude: 31.0409,
    longitude: 31.3785,
    workingHours: "4 PM - 10 PM",
    description: "Specialized dental clinic",
    lat: 31.0409,
    lng: 31.3785,
  },
];


exports.getAllPlaces = () => {
  return placesList;
};

exports.getPlaceById = (id) => {
  return placesList.find((place) => place.id === id);
};

exports.addPlace = (placeData) => {
    placesList.push(placeData);
}

exports.updatePlace = (id, updatedData) => {
  const placeIndex = placesList.findIndex((place) => place.id === id);
  if (placeIndex !== -1) {
    placesList[placeIndex] = { ...placesList[placeIndex], ...updatedData };
    return placesList[placeIndex];
  }
};


exports.deletePlace = (id) => {
  placesList = placesList.filter((place) => place.id !== id);
};