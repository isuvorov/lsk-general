import React from 'react';
import Story from '../../../../Story';
import GridFile from './GridFile';
import GridFiles from './GridFiles';
import LineFile from './LineFile';
import LineFiles from './LineFiles';
import items from './files.mock';

export default ({ storiesOf }) => (
  storiesOf('components/AnyFiles', module)
    .add('GridFile', () => (
      <Story>
        <GridFile
          items={items[0]}
        />
      </Story>
    ))
    .add('GridFiles', () => (
      <Story>
        <GridFiles
          items={items}
        />
      </Story>
    ))
    .add('LineFile', () => (
      <Story>
        <LineFile
          items={items[0]}
        />
      </Story>
    ))
    .add('LineFiles', () => (
      <Story>
        <LineFiles
          items={items}
        />
      </Story>
    ))
    .add('GridFiles errors[]', () => (
      <Story>
        <GridFiles
          items={[]}
        />
        <GridFiles
          items={null}
        />
        <GridFiles
          items={[]}
        />
        <GridFiles
          items={null}
        />
      </Story>
    ))
);
