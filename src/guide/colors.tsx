import React from 'react';
import styled from 'styled-components';

import {
  WHITE_COLOR,
  COAL_COLOR,
  GREY_COLOR,
  LIGHT_GREY_COLOR,
  DARK_GREY_COLOR,
  SECONDARY_GREY,
  LIGHTER_GREY_COLOR,
  GREEN_COLOR,
  LIGHT_RED_COLOR,
  BLUE_COLOR,
  LIGHT_BLUE_COLOR,
  RED_COLOR,
  INDIGO_COLOR,
  RED2_COLOR,
  LIGHT_GREY2_COLOR,
  DARK_GREY2_COLOR,
  LIGHT_RED2_COLOR,
  GREY2_COLOR,
  LIGHT_RED3_COLOR,
  BLUE2_COLOR,
  GOLD_COLOR,
  FOREST_GREEN,
  LIGHT_GREY3_COLOR,
  LIGHT_GREY4_COLOR
} from '../constants/colors';

export const Colors = () => {
  return (
    <div>
      <h2>Theme styles</h2>
      <Table>
        <tbody>
          <tr>
            <td>RED_COLOR</td>
            <td>
              <BgColor color={RED_COLOR} /> <ColorCode>{RED_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_RED_COLOR</td>
            <td>
              <BgColor color={LIGHT_RED_COLOR} />{' '}
              <ColorCode>{LIGHT_RED_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_RED3_COLOR</td>
            <td>
              <BgColor color={LIGHT_RED3_COLOR} />{' '}
              <ColorCode>{LIGHT_RED3_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>RED2_COLOR</td>
            <td>
              <BgColor color={RED2_COLOR} />
              <ColorCode>{RED2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_RED2_COLOR</td>
            <td>
              <BgColor color={LIGHT_RED2_COLOR} />
              <ColorCode>{LIGHT_RED2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>COAL_COLOR</td>
            <td>
              <BgColor color={COAL_COLOR} /> <ColorCode>{COAL_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>GREY_COLOR</td>
            <td>
              <BgColor color={GREY_COLOR} />
              <ColorCode>{GREY_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>DARK_GREY2_COLOR</td>
            <td>
              <BgColor color={DARK_GREY2_COLOR} />{' '}
              <ColorCode>{DARK_GREY2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>SECONDARY_GREY</td>
            <td>
              <BgColor color={SECONDARY_GREY} />{' '}
              <ColorCode>{SECONDARY_GREY}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>GREY2_COLOR</td>
            <td>
              <BgColor color={GREY2_COLOR} />{' '}
              <ColorCode>{GREY2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_GREY4_COLOR</td>
            <td>
              <BgColor color={LIGHT_GREY4_COLOR} />{' '}
              <ColorCode>{LIGHT_GREY4_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_GREY3_COLOR</td>
            <td>
              <BgColor color={LIGHT_GREY3_COLOR} />{' '}
              <ColorCode>{LIGHT_GREY3_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>DARK_GREY_COLOR</td>
            <td>
              <BgColor color={DARK_GREY_COLOR} />{' '}
              <ColorCode>{DARK_GREY_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHTER_GREY_COLOR</td>
            <td>
              <BgColor color={LIGHTER_GREY_COLOR} />{' '}
              <ColorCode>{LIGHTER_GREY_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_GREY_COLOR</td>
            <td>
              <BgColor color={LIGHT_GREY_COLOR} />{' '}
              <ColorCode>{LIGHT_GREY_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_GREY2_COLOR</td>
            <td>
              <BgColor color={LIGHT_GREY2_COLOR} />
              <ColorCode>{LIGHT_GREY2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>WHITE_COLOR</td>
            <td>
              <BgColor color={WHITE_COLOR} />{' '}
              <ColorCode>{WHITE_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>GREEN_COLOR</td>
            <td>
              <BgColor color={GREEN_COLOR} />{' '}
              <ColorCode>{GREEN_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>FOREST_GREEN</td>
            <td>
              <BgColor color={FOREST_GREEN} />
              <ColorCode>{FOREST_GREEN}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>INDIGO_COLOR</td>
            <td>
              <BgColor color={INDIGO_COLOR} />
              <ColorCode>{INDIGO_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>BLUE_COLOR</td>
            <td>
              <BgColor color={BLUE_COLOR} />
              <ColorCode>{BLUE_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>BLUE2_COLOR</td>
            <td>
              <BgColor color={BLUE2_COLOR} />{' '}
              <ColorCode>{BLUE2_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>LIGHT_BLUE_COLOR</td>
            <td>
              <BgColor color={LIGHT_BLUE_COLOR} />
              <ColorCode>{LIGHT_BLUE_COLOR}</ColorCode>
            </td>
          </tr>
          <tr>
            <td>GOLD_COLOR</td>
            <td>
              <BgColor color={GOLD_COLOR} />
              <ColorCode>{GOLD_COLOR}</ColorCode>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

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
  background: ${(props) => props.color};
  border: ${(props) => (props.color === '#ffffff' ? '1px solid #999' : 'none')};
`;

const ColorCode = styled.span`
  display: inline-block;
  padding-left: 20px;
  vertical-align: middle;
`;

const BgColor = styled(Color)`
  background: ${(props) => props.color};
  border: ${(props) => (props.color === '#ffffff' ? '1px solid #999' : 'none')};
`;
