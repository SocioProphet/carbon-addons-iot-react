import React, { useState } from 'react';
import { Add16, Close16, Edit16 } from '@carbon/icons-react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Button } from 'carbon-components-react';

import SimpleList from './SimpleList';

const getListItems = num =>
  Array(num)
    .fill(0)
    .map((i, idx) => ({
      id: idx + 1,
      name: `Item ${idx + 1}`,
    }));

const buttonsToRender = [
  <Edit16 />,
  <Button renderIcon={Close16} hasIconOnly kind="secondary" size="small" onClick={() => {}} />,
  <Button renderIcon={Add16} hasIconOnly size="small" />,
];

storiesOf('Watson IoT Experimental|SimpleList', module)
  .add('basic', () => (
    <div style={{ width: 500 }}>
      <SimpleList
        title={text('Text', 'Simple List')}
        hasSearch
        i18n={{
          searchPlaceHolderText: 'Enter a search',
        }}
        buttons={buttonsToRender}
        items={getListItems(10)}
      />
    </div>
  ))
  .add('tall list (isFullHeight = true)', () => (
    <div style={{ width: 500, height: 1000, background: '#fee', padding: 10 }}>
      <SimpleList
        title={text('Text', 'Simple List')}
        hasSearch
        isFullHeight
        i18n={{
          searchPlaceHolderText: 'Enter a search',
        }}
        buttons={buttonsToRender}
        items={getListItems(10)}
      />
    </div>
  ))
  .add('tall list (isFullHeight = false)', () => (
    <div style={{ width: 500, height: 1000, background: '#fee', padding: 10 }}>
      <SimpleList
        title={text('Text', 'Simple List')}
        hasSearch
        i18n={{
          searchPlaceHolderText: 'Enter a search',
        }}
        buttons={buttonsToRender}
        items={getListItems(10)}
      />
    </div>
  ))

  .add('list with overflow grow', () => (
    <div style={{ width: 500, height: 500, background: '#fee', padding: 10 }}>
      <SimpleList
        title={text('Text', 'Simple List')}
        hasSearch
        i18n={{
          searchPlaceHolderText: 'Enter a search',
        }}
        buttons={buttonsToRender}
        items={getListItems(20)}
      />
    </div>
  ));