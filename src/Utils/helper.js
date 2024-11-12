export const   getCookie=(name)=> {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';').map(cookie => cookie.trim());
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return '';
  }

export  const getPlaceDetails = async (lat, lon,key) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        console.log(data.results);
        const placeName=data.results[0].address_components[1].long_name
        const address = data.results[0].formatted_address;
        const addressComponents = data.results[0].address_components;
        const postalCodeComponent = addressComponents.find(component => component.types.includes('postal_code'));
        const postalCode = postalCodeComponent ? postalCodeComponent.long_name : null;
  
        console.log(`Place name: ${placeName}, Postal code: ${postalCode}`);
        return { placeName, postalCode,address };
      } else {
        console.error('Geocoding API error:', data.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching the place details:', error);
      return null;
    }
  };

  export const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1); // Corrected this line
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };