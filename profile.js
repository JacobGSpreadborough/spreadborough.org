
export function Profile({ name, image, description }) {
	return `<a href="${name}.html">
			<div class="profile">
				<h2>${name}</h2>
				<img src="${image}" alt="image not found" height="200">
				<p>${description}</p>
			</div >
		</a>`
}
