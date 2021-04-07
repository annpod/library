import React from 'react';
import styled from 'styled-components';
import { LibWithTheme } from '../theme-provider';

const Theme = (props: any) => {
  return (
    <div>
      <h2>Theme styles</h2>
      <Table>
        <tbody>
          <tr>
            <td>bgColor</td>
            <td>
              <BgColor /> <ColorCode>{props.theme.bgColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>bgItemColor</td>
            <td>
              <BgItemColor /> <ColorCode>{props.theme.bgItemColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>bgConfirmColor</td>
            <td>
              <BgConfirmColor /> <ColorCode>{props.theme.bgConfirmColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>bgActionColor</td>
            <td>
              <BgActionColor /> <ColorCode>{props.theme.bgActionColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>borderColor</td>
            <td>
              <BorderColor /> <ColorCode>{props.theme.borderColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>borderFocusColor</td>
            <td>
              <BorderFocusColor /> <ColorCode>{props.theme.borderFocusColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>contentHeaderBgColor</td>
            <td>
              <ContentHeaderBgColor /> <ColorCode>{props.theme.contentHeaderBgColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>contentHeaderSecondaryBgColor</td>
            <td>
              <ContentHeaderSecondaryBgColor /> <ColorCode>{props.theme.contentHeaderSecondaryBgColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>textColorMain</td>
            <td>
              <TextColorMain /> <ColorCode>{props.theme.textColorMain}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>textColorRegular</td>
            <td>
              <TextColorRegular /> <ColorCode>{props.theme.textColorRegular}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>textColorRevert</td>
            <td>
              <TextColorRevert /> <ColorCode>{props.theme.textColorRevert}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>textColorNotes</td>
            <td>
              <TextColorNotes /> <ColorCode>{props.theme.textColorNotes}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>iconColorMain</td>
            <td>
              <IconColorMain /> <ColorCode>{props.theme.iconColorMain}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>bgItemColor</td>
            <td>
              <BgItemColor /> <ColorCode>{props.theme.bgItemColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>highlightColor</td>
            <td>
              <HighlightColor /> <ColorCode>{props.theme.highlightColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>bgBackground</td>
            <td>
              <BgBackground /> <ColorCode>{props.theme.bgBackground}</ColorCode>
            </td>
          </tr>

          <tr>
            <td>linkColor</td>
            <td>
              <LinkColor /> <ColorCode>{props.theme.linkColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>statusButtonBg</td>
            <td>
              <StatusButtonBg /> <ColorCode>{props.theme.statusButtonBg}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>routeButtonBg</td>
            <td>
              <RouteButtonBg /> <ColorCode>{props.theme.routeButtonBg}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>uploadButtonBg</td>
            <td>
              <UploadButtonBg /> <ColorCode>{props.theme.uploadButtonBg}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>sliderColor</td>
            <td>
              <SliderColor /> <ColorCode>{props.theme.sliderColor}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>sortButtonColor</td>
            <td>
              <SortButtonColor /> <ColorCode>{props.theme.sortButtonColor}</ColorCode>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export const Themes = LibWithTheme(Theme);

const Table = styled.table`
  td {
    padding: 10px;
  }
`;
const Color = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
`;

const ColorCode = styled.span`
  display: inline-block;
  padding-left: 20px;
  vertical-align: middle;
`;

const BgColor = styled(Color)`
  background: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.bgColor === '#ffffff' || props.theme.bgColor === '#fff' ? '1px solid #999' : 'none'};
`;

const BgItemColor = styled(Color)`
  background: ${(props) => props.theme.bgItemColor};
  border: ${(props) => props.theme.bgItemColor === '#ffffff' || props.theme.bgItemColor === '#fff' ? '1px solid #999' : 'none'};
`;
const BgConfirmColor = styled(Color)`
  background: ${(props) => props.theme.bgConfirmColor};
  border: ${(props) => props.theme.bgConfirmColor === '#ffffff' || props.theme.bgConfirmColor === '#fff' ? '1px solid #999' : 'none'};
`;

const BgActionColor = styled(Color)`
  background: ${(props) => props.theme.bgActionColor};
  border: ${(props) => props.theme.bgActionColor === '#ffffff' || props.theme.bgActionColor === '#fff' ? '1px solid #999' : 'none'};
`;

const BorderColor = styled(Color)`
  background: ${(props) => props.theme.borderColor};
  border: ${(props) => props.theme.borderColor === '#ffffff' || props.theme.borderColor === '#fff' ? '1px solid #999' : 'none'};
`;

const BorderFocusColor = styled(Color)`
  background: ${(props) => props.theme.borderFocusColor};
  border: ${(props) => props.theme.borderFocusColor === '#ffffff' || props.theme.borderFocusColor === '#fff' ? '1px solid #999' : 'none'};
`;

const ContentHeaderBgColor = styled(Color)`
  background: ${(props) => props.theme.contentHeaderBgColor};
  border: ${(props) => props.theme.contentHeaderBgColor === '#ffffff' || props.theme.contentHeaderBgColor === '#fff' ? '1px solid #999' : 'none'};
`;
const ContentHeaderSecondaryBgColor = styled(Color)`
  background: ${(props) => props.theme.contentHeaderSecondaryBgColor};
  border: ${(props) => props.theme.contentHeaderSecondaryBgColor === '#ffffff' || props.theme.contentHeaderSecondaryBgColor === '#fff' ? '1px solid #999' : 'none'};
`;
const TextColorMain = styled(Color)`
  background: ${(props) => props.theme.textColorMain};
  border: ${(props) => props.theme.textColorMain === '#ffffff' || props.theme.textColorMain === '#fff' ? '1px solid #999' : 'none'};
`;
const TextColorRegular = styled(Color)`
  background: ${(props) => props.theme.textColorRegular};
  border: ${(props) => props.theme.textColorRegular === '#ffffff' || props.theme.textColorRegular === '#fff' ? '1px solid #999' : 'none'};
`;
const TextColorRevert = styled(Color)`
  background: ${(props) => props.theme.textColorRevert};
  border: ${(props) => props.theme.textColorRevert === '#ffffff' || props.theme.textColorRevert === '#fff' ? '1px solid #999' : 'none'};
`;
const TextColorNotes = styled(Color)`
  background: ${(props) => props.theme.textColorNotes};
  border: ${(props) => props.theme.textColorNotes === '#ffffff' || props.theme.textColorNotes === '#fff' ? '1px solid #999' : 'none'};
`;
const IconColorMain = styled(Color)`
  background: ${(props) => props.theme.iconColorMain};
  border: ${(props) => props.theme.iconColorMain === '#ffffff' || props.theme.iconColorMain === '#fff' ? '1px solid #999' : 'none'};
`;
const HighlightColor = styled(Color)`
  background: ${(props) => props.theme.highlightColor};
  border: ${(props) => props.theme.highlightColor === '#ffffff' || props.theme.highlightColor === '#fff' ? '1px solid #999' : 'none'};
`;
const BgBackground = styled(Color)`
  background: ${(props) => props.theme.bgBackground};
  border: ${(props) => props.theme.bgBackground === '#ffffff' || props.theme.bgBackground === '#fff' ? '1px solid #999' : 'none'};
`;
const LinkColor = styled(Color)`
  background: ${(props) => props.theme.linkColor};
  border: ${(props) => props.theme.linkColor === '#ffffff' || props.theme.linkColor === '#fff' ? '1px solid #999' : 'none'};
`;
const StatusButtonBg = styled(Color)`
  background: ${(props) => props.theme.statusButtonBg};
  border: ${(props) => props.theme.statusButtonBg === '#ffffff' || props.theme.statusButtonBg === '#fff' ? '1px solid #999' : 'none'};
`;
const RouteButtonBg = styled(Color)`
  background: ${(props) => props.theme.routeButtonBg};
  border: ${(props) => props.theme.routeButtonBg === '#ffffff' || props.theme.routeButtonBg === '#fff' ? '1px solid #999' : 'none'};
`;
const UploadButtonBg = styled(Color)`
  background: ${(props) => props.theme.uploadButtonBg};
  border: ${(props) => props.theme.uploadButtonBg === '#ffffff' || props.theme.uploadButtonBg === '#fff' ? '1px solid #999' : 'none'};
`;
const SliderColor = styled(Color)`
  background: ${(props) => props.theme.sliderColor};
  border: ${(props) => props.theme.sliderColor === '#ffffff' || props.theme.sliderColor === '#fff' ? '1px solid #999' : 'none'};
`;
const SortButtonColor = styled(Color)`
  background: ${(props) => props.theme.sortButtonColor};
  border: ${(props) => props.theme.sortButtonColor === '#ffffff' || props.theme.sortButtonColor === '#fff' ? '1px solid #999' : 'none'};
`;
