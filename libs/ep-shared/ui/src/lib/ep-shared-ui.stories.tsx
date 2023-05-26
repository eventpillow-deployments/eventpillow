import type { Meta } from '@storybook/react';
import { EpSharedUi } from './ep-shared-ui';

const Story: Meta<typeof EpSharedUi> = {
  component: EpSharedUi,
  title: 'EpSharedUi',
};
export default Story;

export const Primary = {
  args: {},
};
