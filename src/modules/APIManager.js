/* You're going to eliminate the possibility of duplicate code by making a module
whose sole responsibility is to interact with the API.*/

const remoteURL = "http://localhost:5002"

export default {
	get(resource, id) {
		return fetch(`${remoteURL}/${resource}/${id}`).then(result =>
			result.json()
		);
	},
	getAll(resource, userId) {
		return fetch(
			`http://localhost:5002/${resource}?userId=${userId}&_sort=timeStamp`
		).then(result => result.json());
	},

	getAllMakeUp(brand, productType) {
		return fetch(
			`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${productType}`
		).then(results => results.json())
		// .then(results => results.map(this.mapApiProductToProduct));
	},

	delete(resource, id) {
		console.log(resource, id)
		return fetch(`http://localhost:5002/${resource}/${id}`, {
			method: "DELETE"
		}).then(result => result.json());
	},

	mapApiProductToProduct(apiProduct) {
		return {
			name: apiProduct.name,
			brand: apiProduct.brand,
			productId: apiProduct.productId,
			description: apiProduct.description,
			image_link: apiProduct.image_link,
			price: apiProduct.price
		}
	},

	saveProductToWish: saveProduct => {
		console.log(saveProduct);
		return fetch("http://localhost:5002/wishLists", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(saveProduct)
		}).then(response => response.json());
	},
	saveProductToCollection: saveProduct => {
		console.log(saveProduct);
		return fetch("http://localhost:5002/collections", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(saveProduct)
		}).then(response => response.json());
	},
	getAllCollection(userId) {
		return fetch(`${remoteURL}/products?userId=${userId}`).then(response =>
			response.json()
		);
	},
	getAllWishItems(userId) {
		return fetch(`${remoteURL}/products?userId=${userId}`).then(response =>
			response.json()
		);
	},
	post(resource, newResource) {
		return fetch(`${remoteURL}/${resource}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newResource)
		}).then(data => data.json());
	},

	patch(resource, editedResource, id) {
		return fetch(`${remoteURL}/${resource}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedResource)
		}).then(data => data.json());
	},
		put(resource, editedResource, id) {
		return fetch(`${remoteURL}/${resource}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedResource)
		}).then(data => data.json());
	}
};
