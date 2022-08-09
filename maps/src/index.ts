import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapDiv: HTMLElement | null = document.getElementById('map');

const user = new User();
const company = new Company();
const customMap = new CustomMap(mapDiv);

customMap.addMarker(user);
customMap.addMarker(company);
