import { faHashtag, faUser, faBriefcase, faCubes, faCoins} from '@fortawesome/free-solid-svg-icons';


export function getIcon(iconName) {
    switch(iconName) {
        case "Hashrate":
            return faHashtag;
        case "Active Miners":
            return faUser;
        case "Workers":
            return faBriefcase;
        case "Blocks/Hour":
            return faCubes;
        case "Price":
            return faCoins;
    }
}