# Contributing

The dataset is split across per-record TypeScript files. Each person, group, and event lives in its own file. A build step assembles them into the consolidated `DataPackage` that consumers import.

## A note on cultural protocols

This dataset contains records of First Nations persons, some of whom are deceased. When contributing:

- Be specific about a person's nation/people (Anishinaabe, Lakota, Cree, etc.) rather than generic "Indigenous"
- Honour traditional names and spellings; use diacritics
- For deceased persons, follow protocols of their nation where known
- Do not edit content about a community without consulting it; flag uncertainty in your PR
- Cite credible sources — community publications first, mainstream press second

## File layout

```
src/
  person/
    winona-laduke.ts
    dennis-banks.ts
    ...
  group/
    american-indian-movement.ts
    ...
  event/
    event-001.ts
    ...
```

- One file per record. Filename must equal the `id` field plus `.ts`.
- Person IDs are slugs derived from `fullName` (lowercase, hyphen-separated, no diacritics): `winona-laduke`, not `Winona LaDuke`.
- For non-Latin names, use the Latin transliteration as the slug.

## Adding a person

1. Copy an existing file in `src/person/` as a template
2. Set the filename and `id` to your new slug (must match exactly)
3. Fill in the fields, paying close attention to:
   - `fullName` — preferred public name with diacritics
   - `givenName` / `surname` — when applicable
   - `englishName` — transliteration if `fullName` is non-Latin
   - `reference` — link to a credible source (Wikipedia, community publication, scholarly article)
4. Run `npm run build` — the assembler validates IDs, references, and shape
5. Run `npm test`

The assembler checks:

- `id` field matches the filename
- IDs are unique within each kind (person/group/event)
- `groupMemberships` references existing groups
- `attendeeIds` (on events) reference existing people

## Adding a group or event

Same flow, files go under `src/group/` or `src/event/`.

For events, `attendeeIds` is an array of person IDs.

## Submitting a PR

1. Edit the relevant file under `src/person/`, `src/group/`, or `src/event/`
2. Run `npm test`
3. Commit with a clear message: `add: <name>` or `fix: <name>'s bio reference`
4. Open a PR. Mention cultural sourcing in the PR description when relevant.

Small, focused PRs are easier to review. One person/group/event per PR is ideal.

## What gets generated

`src/_generated/data-package.ts` is **auto-generated** by `assemble-data-package`. Don't edit it directly. It's gitignored. Each `npm run build` or `npm test` regenerates it.

## If you spot something incorrect

Open a PR. Or open an issue if you'd prefer to flag rather than fix. Both are welcome.
