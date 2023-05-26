import { render } from '@testing-library/react';

import EpSharedUi from './ep-shared-ui';

describe('EpSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EpSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
