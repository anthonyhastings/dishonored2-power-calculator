import snapshotDiff, { toMatchDiffSnapshot } from 'snapshot-diff';

expect.addSnapshotSerializer(snapshotDiff.getSnapshotDiffSerializer());
expect.extend({ toMatchDiffSnapshot });
