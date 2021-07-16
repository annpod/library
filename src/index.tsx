import {
  Button,
  ExportBtn,
  SaveBtn,
  SubmitButton,
  ButtonStyled
} from './button';
import { CollapseItem } from './collapse-item';
import { ContentSider, ContentHeader } from './content';
import {
  DeskDetails,
  DesksContent,
  FilterBuilder,
  formatData,
  locationKeyMap
} from './desks';
import { ExtendedSelect } from './extended-select';
import {
  FormAmount,
  FormAutoComplete,
  FormCheck,
  FormIconSelect,
  FormInput,
  FormInputNoAnt,
  FormNumberInput,
  FormSelect,
  FormText,
  FormTimePeriod,
  FormSectionStart,
  FormItemBox,
  FormLabel,
  SimpleInput,
  AutocompleteInput,
  SimpleTextArea,
  AmountInput,
  BasicSelect,
  BasicSelectOption,
  SelectColorBox,
  FormPanelBody,
  FormBox,
  FormSectionStartNoTop,
  FormSectionStartNoBottom,
  FormSubsectionStart,
  FormSectionDescription,
  InputCustom,
  ErrorText,
  Title,
  Block,
  FormCheckbox
} from './form';
import { Icon, SvgIconStyled } from './icon';
import { TextIconButton, TextWrapper, IconButton } from './icon-button';
import { TimePeriodInput } from './time-period-input';
import { TimePicker } from './time-picker';
import { TimeRangePicker } from './time-range-picker';
import { Select, selectStyles } from './select';
import { TabButton, IconTextTabButton } from './tab-button';
import { LocationFilter, createLocationFilter } from './location-filter';
import { LocationFilterItems, ToastStatus } from './typings';
import { FetchTable } from './fetch-table';
import { StyledPagination } from './pagination';
import { Modal } from './modal';
import { CustomScrollbars } from './scrollbars';
import { showToast, Toast } from './toast';
import { CustomSearchInput } from './custom-search-input';
import { Datepicker } from './date-picker';
import { ParamsPanel } from './params-panel';

import { Header } from './header';
import { Input, InputStyled } from './input';
import { Switch } from './switch';
import { RadioGroup } from './radio-group';
import { CheckboxGroup } from './checkbox-group';
import { Number } from './number';

import {
  UsersIcon,
  EstateIcon,
  ResourcesIcon,
  ReportingIcon,
  SettingsIcon,
  BookingsIcon,
  CovidIcon,
  UploadIcon,
  MeetingsIcon
} from './route-selector/route-selector.icons';

import {
  DayRangePicker,
  DAY_MARKS,
  getRangeValue,
  STEP,
  DaySlider
} from './day-range-picker';

import { Dropdown } from './dropdown';
import { ExtendedDropdown } from './extended-dropdown';
import { LocationDropdown } from './location-dropdown';

// hooks
import { useClickOutside, useDebounce, useToggle } from './hooks';

// theme provider

import { LibThemeProvider, LibWithTheme } from './theme-provider';

// styles
import {
  ResourcesInputNumbers,
  ContentWrapper,
  ListPageBodyPanel,
  ListPageHeaderBox,
  ListPageSearchBox,
  ListPageSearchLabel,
  ListPageSearchInputBox,
  ListPageTableBox,
  SectionSelectorBody,
  SearchSelectBox,
  RouteButton,
  SidePanelButton,
  MainBox,
  FormTopBody,
  CancelBtn,
  CancelIcon,
  BackButtonContainer,
  GlobalSeparator,
  MainTitle,
  MainTitleBody,
  MainTitleBox,
  MainTitleBoxNoLeft,
  MainTitleName,
  SubTitle,
  MainTitleRegion,
  CheckedInputStyles,
  DeleteBtn
} from './styled-components/resources.styled';

import { Layout, FocusViewLayout } from './layout';

export {
  Layout,
  FocusViewLayout,
  Button,
  ExportBtn,
  SaveBtn,
  ButtonStyled,
  TextWrapper,
  Input,
  InputStyled,
  Switch,
  SubmitButton,
  CollapseItem,
  ContentSider,
  ContentHeader,
  CustomSearchInput,
  Datepicker,
  ExtendedSelect,
  FetchTable,
  FormAmount,
  FormAutoComplete,
  FormCheck,
  FormIconSelect,
  FormInput,
  FormInputNoAnt,
  FormNumberInput,
  FormSelect,
  FormText,
  FormTimePeriod,
  FormCheckbox,
  Icon,
  TextIconButton,
  TimePeriodInput,
  LocationFilter,
  LocationFilterItems,
  StyledPagination,
  Modal,
  showToast,
  Toast,
  ToastStatus,
  ParamsPanel,
  TimePicker,
  TimeRangePicker,
  Select,
  selectStyles,
  DayRangePicker,
  DaySlider,
  DAY_MARKS,
  getRangeValue,
  STEP,
  CustomScrollbars,
  TabButton,
  IconTextTabButton,
  DeskDetails,
  DesksContent,
  IconButton,
  FilterBuilder,
  createLocationFilter,
  formatData,
  locationKeyMap,
  useClickOutside,
  useDebounce,
  useToggle,
  ResourcesInputNumbers,
  ContentWrapper,
  ListPageBodyPanel,
  ListPageHeaderBox,
  ListPageSearchBox,
  ListPageSearchLabel,
  ListPageSearchInputBox,
  ListPageTableBox,
  SectionSelectorBody,
  SearchSelectBox,
  RouteButton,
  SidePanelButton,
  MainBox,
  FormTopBody,
  CancelBtn,
  CancelIcon,
  BackButtonContainer,
  GlobalSeparator,
  MainTitle,
  MainTitleBody,
  MainTitleBox,
  MainTitleBoxNoLeft,
  MainTitleName,
  SubTitle,
  MainTitleRegion,
  CheckedInputStyles,
  Header,
  LibThemeProvider,
  LibWithTheme,
  FormSectionStart,
  FormItemBox,
  FormLabel,
  SimpleInput,
  AutocompleteInput,
  SimpleTextArea,
  AmountInput,
  BasicSelect,
  BasicSelectOption,
  SelectColorBox,
  FormPanelBody,
  FormBox,
  FormSectionStartNoTop,
  FormSectionStartNoBottom,
  FormSubsectionStart,
  FormSectionDescription,
  InputCustom,
  ErrorText,
  Title,
  Block,
  SvgIconStyled,
  UsersIcon,
  EstateIcon,
  ResourcesIcon,
  ReportingIcon,
  SettingsIcon,
  BookingsIcon,
  CovidIcon,
  UploadIcon,
  MeetingsIcon,
  DeleteBtn,
  RadioGroup,
  CheckboxGroup,
  Dropdown,
  Number,
  ExtendedDropdown,
  LocationDropdown
};
