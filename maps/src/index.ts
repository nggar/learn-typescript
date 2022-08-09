import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapDiv: HTMLElement | null = document.getElementById('map');

new CustomMap(mapDiv);
