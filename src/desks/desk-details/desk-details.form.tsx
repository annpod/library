import React, { Component } from 'react';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { strings } from '../../constants/strings';
import {
  FormInput,
  FormSelect,
  FormSectionStart,
  FormSectionStartNoTop,
  FormSectionStartNoBottom,
  FormAutoComplete,
} from '../../form';
import { IOpenDeskDetails } from '../../typings/desk-details';
import { formatSelectOptions } from '../../utils/select.utils';
import { DeskFeatures } from './desk-features';
import { DetailsFormTitle } from './desk-details.styled';
import { HeaderSelect } from './header-select';
import {
  FormTopBody,
  CancelBtn,
  CancelIcon,
  SaveBtn,
  CheckedInputStyles,
} from '../../styled-components/resources.styled';
import { ISaveDeskData } from '../../typings/desks';

export interface IDeskDetailsFormBodyProps extends FormComponentProps {
  desk: IOpenDeskDetails;
  options: any; // TODO any
  onSave: (desk: ISaveDeskData, cb: () => void) => void;
  onCancel: () => void;
  onDelete: (provisioningKey: string) => void;
  onSearchUser(search: string): void;
  isImplementation: boolean;
}

interface IDeskDetailsFormState {
  mode: string;
  isSaving: boolean;
  isSelected: boolean;
}

const detailsScreen = strings.resources.desks.detailsScreen;

export class DeskDetailsFormBody extends Component<
  IDeskDetailsFormBodyProps,
  IDeskDetailsFormState
> {
  public state = {
    mode: '',
    isSaving: false,
    isSelected: false,
  };
  public onAgileUser = () => {
    this.setState({ mode: 'agile' });
  };

  public onFixedUser = () => {
    this.setState({ mode: 'fixed' });
  };

  public onFinishSaving = () => {
    this.setState({ isSaving: false });
  };

  public onSave = () => {
    if (!this.props.form || this.state.isSaving) {
      return;
    }
    this.setState({ isSaving: true });
    this.props.form.validateFields((err, values: any) => {
      if (err) {
        this.setState({ isSaving: false });
        return;
      }

      const isInitialUserSelected =
        this.props.desk.details.allocatedUser &&
        this.props.desk.details.allocatedUser.key === values.allocatedUserId;

      const allocatedUserId =
        this.state.mode === 'agile'
          ? null
          : isInitialUserSelected || this.state.isSelected
          ? values.allocatedUserId
          : null;

      const payload = {
        features: values.features,
        neighbourhoodId: values.neighbourhoodId,
        name: values.name,
        status: values.status,
        allocatedUserId,
        provisioningKey: this.props.desk.provisioningKey,
      };

      this.props.onSave(payload, this.onFinishSaving);
    });
  };

  public onSelectUser = () => {
    this.setState({ isSelected: true });
  };

  public onSearchUser = (name: string) => {
    this.setState({ isSelected: false, mode: 'fixed' });

    this.props.onSearchUser(name);
  };

  public onChangeLocation = () => {
    return;
  };

  public render() {
    const details = this.props.desk.details;
    const { desk, isImplementation } = this.props;
    const isFixedFieldActive = this.state.mode === 'fixed';

    const formFields = ['name', 'status'].concat(
      isFixedFieldActive ? ['allocatedUserId'] : []
    );
    const formErrors = this.props.form.getFieldsError(formFields);
    const formValues = this.props.form.getFieldsValue(formFields);

    const isDisabled = Object.entries(formValues).find(
      (item) => item[1] !== undefined
    );
    const isNotFoundErrors = Object.entries(formErrors).find(
      (item) => item[1] !== undefined
    );

    return (
      <Form layout="vertical">
        <FormTopBody>
          <CancelBtn type="button" onClick={this.props.onCancel}>
            <CancelIcon type="backArrow" />
          </CancelBtn>
          <DetailsFormTitle>{details.name}</DetailsFormTitle>
          <SaveBtn
            disabled={!isDisabled || !!isNotFoundErrors || this.state.isSaving}
            onClick={this.onSave}
          >
            {strings.resources.rooms.detailsScreen.saveButtonTitle}
          </SaveBtn>
          <HeaderSelect
            form={this.props.form}
            options={[]}
            id="status"
            deskName={details.name}
            initialValue={details.deskStatus}
            placeholder={detailsScreen.status.label}
            isNewDesk={!!desk.provisioningKey}
            rules={[
              {
                required: true,
                message: detailsScreen.status.error,
              },
            ]}
          />
        </FormTopBody>
        <FormSectionStartNoTop>
          {detailsScreen.sections.deskDetails}
        </FormSectionStartNoTop>
        <FormInput
          form={this.props.form}
          label={detailsScreen.name.label}
          placeholder={detailsScreen.name.placeholder}
          id="name"
          initialValue={details.name}
          validateTrigger="onChange"
          rules={[
            {
              required: true,
              message: detailsScreen.name.error,
            },
            {
              pattern: /^(\S.{1,46}\S)$/g,
              message: detailsScreen.name.whitespace,
            },
          ]}
        />
        {isImplementation && (
          <FormInput
            form={this.props.form}
            id="provisioningKey"
            initialValue={desk.provisioningKey}
            label={'Desk Provisioning ID'}
            readonly={true}
          />
        )}
        <CheckedInputStyles.Wrapper>
          <CheckedInputStyles.CheckboxWrapper>
            <CheckedInputStyles.CheckboxLabel>
              <span>{detailsScreen.user.agile}</span>
              <CheckedInputStyles.Checkbox
                id={`slc_User`}
                checked={
                  (!this.state.mode &&
                    !this.props.desk.details.allocatedUser.fullName) ||
                  this.state.mode === 'agile'
                }
                onChange={this.onAgileUser}
              />
            </CheckedInputStyles.CheckboxLabel>
          </CheckedInputStyles.CheckboxWrapper>

          <CheckedInputStyles.CheckboxWrapper>
            <CheckedInputStyles.CheckboxLabel>
              <span>{detailsScreen.user.fixed}</span>
              <CheckedInputStyles.Checkbox
                id={`slc_User`}
                checked={
                  (!this.state.mode &&
                    !!this.props.desk.details.allocatedUser.fullName) ||
                  this.state.mode === 'fixed'
                }
                onChange={this.onFixedUser}
              />
            </CheckedInputStyles.CheckboxLabel>

            <FormAutoComplete
              form={this.props.form}
              placeholder={detailsScreen.user.placeholder}
              id="allocatedUserId"
              initialValue={
                details.allocatedUser.key ? details.allocatedUser.key : ''
              }
              data={this.props.options.users}
              onSearch={this.onSearchUser}
              onSelect={this.onSelectUser}
              disabled={
                (!this.state.mode &&
                  !this.props.desk.details.allocatedUser.fullName) ||
                this.state.mode === 'agile'
              }
              validateTrigger="onBlur"
              isHideError={!isFixedFieldActive}
              rules={
                isFixedFieldActive
                  ? [
                      {
                        validator: () => {
                          return this.state.mode === 'agile' ||
                            this.state.isSelected
                            ? Promise.resolve()
                            : Promise.reject(detailsScreen.user.error);
                        },
                      },
                    ]
                  : []
              }
            />
          </CheckedInputStyles.CheckboxWrapper>
        </CheckedInputStyles.Wrapper>

        <FormSectionStart>{detailsScreen.sections.location}</FormSectionStart>
        <FormSelect
          form={this.props.form}
          placeholder={detailsScreen.region.placeholder}
          label={detailsScreen.region.location}
          id="regionKey"
          initialValue={details.location.regionProvisioningKey}
          options={formatSelectOptions(
            this.props.options.regions,
            'provisioningKey'
          )}
          disabled={true}
          onChange={this.onChangeLocation}
        />
        <FormSelect
          form={this.props.form}
          placeholder={detailsScreen.site.placeholder}
          id="siteKey"
          initialValue={details.location.siteProvisioningKey}
          options={formatSelectOptions(
            this.props.options.sites,
            'provisioningKey'
          )}
          disabled={true}
          onChange={this.onChangeLocation}
        />

        <FormSelect
          form={this.props.form}
          placeholder={detailsScreen.building.placeholder}
          id="buildingKey"
          initialValue={details.location.buildingProvisioningKey}
          options={formatSelectOptions(
            this.props.options.buildings,
            'provisioningKey'
          )}
          disabled={true}
          onChange={this.onChangeLocation}
        />

        <FormSelect
          form={this.props.form}
          placeholder={detailsScreen.floor.placeholder}
          id="floorKey"
          initialValue={details.location.floorProvisioningKey}
          options={formatSelectOptions(
            this.props.options.floors,
            'provisioningKey'
          )}
          onChange={this.onChangeLocation}
          disabled={true}
        />

        <FormSectionStartNoBottom style={{ marginBottom: 20 }}>
          {detailsScreen.sections.neighbourhoods}
        </FormSectionStartNoBottom>

        <FormSelect
          id="neighbourhoodId"
          form={this.props.form}
          placeholder={detailsScreen.user.placeholder}
          initialValue={details.neighbourhoodId}
          options={formatSelectOptions(
            this.props.options.neighbourhoods,
            'id',
            'color'
          )}
        />
        <FormSectionStartNoBottom>
          {detailsScreen.sections.features}
        </FormSectionStartNoBottom>

        <DeskFeatures
          id="features"
          form={this.props.form}
          options={details.features}
        />
      </Form>
    );
  }
}

export const DeskDetailsForm = Form.create<IDeskDetailsFormBodyProps>()(
  DeskDetailsFormBody
);
