class LeafletMap {
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, message, markerClass) {
        const marker = L.marker([lat, lng], {
            icon: L.divIcon({ className: markerClass }) // Use the class for custom styling
        }).addTo(this.map);
        marker.bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message, marker.class);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

// Example usage
const myMap = new LeafletMap('map', [8.360004, 124.868419], 14);
myMap.loadMarkersFromJson('applet-2.json');
