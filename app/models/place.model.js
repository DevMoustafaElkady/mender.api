class Place {
  constructor(
    id,
    name,
    type,
    speciality,
    governorate,
    adress,
    phone,
    email,
    website,
    latitude,
    longitude,
    workingHours,
    description,
    lat,
    lng
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.speciality = speciality;
    this.governorate = governorate;
    this.adress = adress;
    this.phone = phone;
    this.email = email;
    this.website = website;
    this.latitude = latitude;
    this.longitude = longitude;
    this.workingHours = workingHours;
    this.description = description;
    this.lat = lat;
    this.lng = lng;
  }
}

module.exports = Place;
