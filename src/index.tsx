import { Button, ExportBtn, SaveBtn, SubmitButton } from './button';
import { CollapseItem } from './collapse-item';
import { ContentSider, ContentHeader } from './content';
import { DeskDetails, DesksContent } from './desks';
import { ExtendedSelect, IExtendedSelectOption } from './extended-select';
import {
  FormAmount,
  FormAutoComplete,
  IAutoCompleteOption,
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
  FormCheckbox,
} from './form';
import { Icon, SvgIconStyled } from './icon';
import { TextIconButton, TextWrapper } from './icon-button';
import { TimePeriodInput } from './time-period-input';
import { TimePicker } from './time-picker';
import { TimeRangePicker } from './time-range-picker';
import { Select } from './select';
import { TabButton, IconTextTabButton } from './tab-button';
import {
  LocationFilter,
  // ILocationFilterProps,
  createLocationFilter,
  LocationFilterItems,
} from './location-filter';
export type { ILocationFilterProps } from './location-filter';
import { FetchTable, IFetchTableProps } from './fetch-table';
import { StyledPagination, IPaginationProps } from './pagination';
import { Modal, IModal } from './modal';
import { CustomScrollbars } from './scrollbars';
import { IconButton } from './icon-button';
import { CustomSearchInput } from './custom-search-input';
import { Datepicker } from './date-picker';
import { ParamsPanel } from './params-panel';
import {
  IDesksProps,
  FilterBuilder,
  formatData,
  locationKeyMap
} from './desks';
import { Header } from './header';
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

// hooks
import { useClickOutside, useDebounce, useToggle } from './hooks';

// theme provider

import { LibThemeProvider } from './theme-provider';
import { LibWithTheme } from './theme-provider';

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

export {
  Button,
  ExportBtn,
  SaveBtn,
  TextWrapper,
  SubmitButton,
  CollapseItem,
  ContentSider,
  ContentHeader,
  CustomSearchInput,
  Datepicker,
  ExtendedSelect,
  IExtendedSelectOption,
  FetchTable,
  FormAmount,
  FormAutoComplete,
  IAutoCompleteOption,
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
  IFetchTableProps,
  StyledPagination,
  IPaginationProps,
  Modal,
  IModal,
  ParamsPanel,
  TimePicker,
  TimeRangePicker,
  Select,
  CustomScrollbars,
  TabButton,
  IconTextTabButton,
  DeskDetails,
  DesksContent,
  IconButton,
  IDesksProps,
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
};

