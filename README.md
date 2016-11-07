This repository demonstrates how grunt's file matching and expanding capabilities can become dramatically faster with a few simple changes.

All IO operations for exclusion patterns can be avoided.  Also, the glob library makes it easy to cache the results of fs calls across multiple glob operations.

To run the benchmark:

```bash
# Run vanilla grunt
$ npm install
$ npm install grunt@1
$ grunt
# Now run a version of grunt with the proposed improvements
$ npm install
$ grunt
```

The set of matched files are output to `matched-files.txt` so you can confirm that grunt's behavior is identical in both cases.
