import snapshotDiff, { toMatchDiffSnapshot } from 'snapshot-diff';
import '@testing-library/jest-dom';
import { server } from './mock-server';

expect.addSnapshotSerializer(snapshotDiff.getSnapshotDiffSerializer());
expect.extend({ toMatchDiffSnapshot });

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
