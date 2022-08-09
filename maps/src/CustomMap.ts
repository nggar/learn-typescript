export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(element: HTMLElement | null) {
        if (element)
            this.googleMap = new google.maps.Map(element, {
                zoom: 1,
                center: { lat: 0, lng: 0 },
            });
    }
}
