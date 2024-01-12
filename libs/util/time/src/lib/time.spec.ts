import { waitFor } from './time';

describe('waitFor', () => {
  it('delays for the specified amount of time', async () => {
    const waitTime = 1000;
    const startTime = new Date().getTime();
    await waitFor(waitTime);
    const endTime = new Date().getTime();
    const timeDifference = endTime - startTime;
    expect(timeDifference).toBeGreaterThanOrEqual(waitTime);
  });
});
