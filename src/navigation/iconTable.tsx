import Licensing from "./icons/Licensing";
import Homepage from "./icons/Homepage";
import MobileApp from "./icons/mobile_app";
import SelectShard from "./icons/SelectShard";
import Kiosk from "./icons/Kiosk";
import Admin from "./icons/Admin";
import Upload from "./icons/Upload";
import Resources from "./icons//Resources";
import Estate from "./icons/Estate";
import Covid from "./icons/Covid";
import UserDirectory from "./icons/UserDirectory";
import Bookings from "./icons/Bookings";
import Reporting from "./icons/Reporting";
import Settings from "./icons/Settings";

interface IIcon {
  [key: string]: (color: { color?: string }) => JSX.Element;
}

export const iconTable: IIcon = {
  select_shard: SelectShard,
  licensing: Licensing,
  homepage: Homepage,
  mobile: MobileApp,
  kiosk: Kiosk,
  admin: Admin,
  upload: Upload,
  resources: Resources,
  estate: Estate,
  userDirectory: UserDirectory,
  covid: Covid,
  bookings: Bookings,
  reporting: Reporting,
  settings: Settings,
};
