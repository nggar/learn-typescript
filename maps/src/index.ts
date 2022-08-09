import { User } from './User';
import { Company } from './Company';

const mapDiv: HTMLElement | null = document.getElementById('map');

mapDiv &&
    new google.maps.Map(mapDiv, {
        zoom: 1,
        center: { lat: 0, lng: 0 },
    });
