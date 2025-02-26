const businesses = [
    {
        name: "Blue Nile Restaurant",
        address: "Near the Blue Nile River",
        reviews: []
    },
    {
        name: "Tana Hotel",
        address: "1st Street, Bahir Dar",
        reviews: []
    },
    {
        name: "Abay Minch Lodge",
        address: "Next to Lake Tana",
        reviews: []
    },
    {
        name: "Bahir Dar University Cafe",
        address: "Bahir Dar University Campus",
        reviews: []
    },
    {
        name: "Horizon Restaurant",
        address: "Near the Airport Road",
        reviews: []
    },
    {
        name: "Dawit Coffee",
        address: "Bahir Dar Main Street",
        reviews: []
    },
    {
        name: "Tana Fish Restaurant",
        address: "Lake Tana Shore",
        reviews: []
    },
    {
        name: "Gondar Restaurant",
        address: "Near Bahir Dar Stadium",
        reviews: []
    },
    {
        name: "Ethio-American Restaurant",
        address: "Bahir Dar, Near the Bus Station",
        reviews: []
    },
    {
        name: "Bahir Dar Craft Shop",
        address: "Main Market, Bahir Dar",
        reviews: []
    }
];

function displayBusinesses() {
    businesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.className = "business-item";
        businessItem.innerHTML = `
            <h3>${business.name}</h3>
            <p>${business.address}</p>
            <input type="text" class="review-input" placeholder="Leave a review...">
            <button onclick="addReview('${business.name}')">Submit</button>
            <div class="reviews"></div>
        `;
        document.getElementById('business-list').appendChild(businessItem);
    });
}

function addReview(businessName) {
    const businessItem = Array.from(document.getElementsByClassName("business-item"))
                               .find(item => item.querySelector('h3').innerText === businessName);
    const reviewInput = businessItem.querySelector('.review-input');
    const reviewsContainer = businessItem.querySelector('.reviews');

    if (reviewInput.value) {
        const review = document.createElement('p');
        review.innerText = reviewInput.value;
        reviewsContainer.appendChild(review);
        reviewInput.value = ""; // Clear input after submitting
    }
}

function filterBusinesses() {
    const filter = document.getElementById('search-input').value.toLowerCase();
    const businessItems = document.getElementsByClassName('business-item');

    Array.from(businessItems).forEach(item => {
        const businessName = item.querySelector('h3').innerText.toLowerCase();
        item.style.display = businessName.includes(filter) ? '' : 'none';
    });
}

// Call displayBusinesses on page load
window.onload = displayBusinesses;