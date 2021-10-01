import './styles.css';

import {
  Button,
  ExportBtn,
  SaveBtn,
  SubmitButton,
  ButtonStyled,
  EditButton
} from './button';
import { Breadcrumbs } from './breadcrumbs';
import { CollapseItem } from './collapse-item';
import { ContentSider, ContentHeader } from './content';
import { ShowMoreText } from './showmore-text';
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
  FormSectionStartTop,
  FormSectionStartNoBottom,
  FormSubsectionStart,
  FormSectionDescription,
  FormSubSectionTop,
  FormSubSection,
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
import { LocationFilterItems, ToastStatus, ThemeTypes } from './typings';
import { FetchTable, Table } from './fetch-table';
import { StyledPagination } from './pagination';
import { Modal } from './modal';
import { Dialogue } from './dialogue';
import { CustomScrollbars } from './scrollbars';
import { showToast, Toast, dismissToast } from './toast';
import { CustomSearchInput } from './custom-search-input';
import { Datepicker } from './date-picker';
import { ParamsPanel } from './params-panel';
import { Wrapper } from './wrappers';
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

import { Monetary } from './monetary';
import { TimeDropdown } from './time-dropdown';

// hooks
import { useClickOutside, useDebounce, useToggle } from './hooks';

// theme provider

import { LibThemeProvider, LibWithTheme } from './theme-provider';
import { theme } from './themes';
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

import {
  Layout,
  FocusViewLayout,
  PageLayout,
  ContentLayout,
  Sidebar,
  NavLayout
} from './layout';
import { Drawer } from './drawer';

export {
  Layout,
  PageLayout,
  ContentLayout,
  NavLayout,
  FocusViewLayout,
  Sidebar,
  Drawer,
  Button,
  ExportBtn,
  SaveBtn,
  ButtonStyled,
  EditButton,
  Breadcrumbs,
  TextWrapper,
  Wrapper,
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
  Table,
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
  Dialogue,
  showToast,
  dismissToast,
  Toast,
  ToastStatus,
  ParamsPanel,
  TimePicker,
  TimeRangePicker,
  Select,
  ShowMoreText,
  selectStyles,
  DayRangePicker,
  DaySlider,
  DAY_MARKS,
  getRangeValue,
  STEP,
  CustomScrollbars,
  TabButton,
  IconTextTabButton,
  IconButton,
  createLocationFilter,
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
  theme,
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
  FormSectionStartTop,
  FormSectionStartNoBottom,
  FormSubsectionStart,
  FormSectionDescription,
  FormSubSectionTop,
  FormSubSection,
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
  LocationDropdown,
  Monetary,
  TimeDropdown,
  ThemeTypes
};
