import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapDiv: HTMLElement | null = document.getElementById('map');

const user = new User();
const customMap = new CustomMap(mapDiv);

customMap.addUserMarker(user);
