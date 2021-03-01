import styled from 'styled-components';

import { BasicSelect } from '../form.styled';
import { Select } from 'antd';

export const IconSelectBase: new <T>() => Select<T> = styled(BasicSelect)`
  max-width: 100px;
` as any;

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
`;
