import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews',
  params: {
    customer_type: 'solo_traveller,review_category_group_of_friends',
    locale: 'en-gb',
    sort_type: 'SORT_MOST_RELEVANT',
    language_filter: 'en-gb,de,fr'
  },
  headers: {
    'x-rapidapi-key': 'ac01d2dcb6mshae952bdb1a61dc8p1bd38ejsn00900591bab4',
    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}