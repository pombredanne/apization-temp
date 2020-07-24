---
title: "Evaluation of the approach (APIzator)"
---

This section contains all the data we used to evaluate our approach called *APIzator*.

We collected a large sample of *StackOverflow* posts regarding questions on *Java* and run our tool *APIzator* to automatically generate *APIzations*.
<!-- These complete examples are browsable in our tool. -->
We asked human participants to apply the *APIzation* on a subset of the extracted snippets, to constitute the oracle for our study.
In our evaluation study, we compare the automatic generated *APIzations* to those of the oracle.

## Process

The following table shows the steps of our processing method to collect the data for the study.

Step | Description | Files | Questions | Answers | Methods | Snippets | Pairs | Data
---: | --- | --- | --- | --- | --- | --- | --- | ---
[1](#1) | *GitHub* archive | `~1,000,000` | – | – | – | – | – | –
[2](#2) | Filter *Java* files with an explicit link to *StackOverflow* | `57,810` | – | – | – | – | – | [`gh_files.json.gz`][gh_files.json.gz]
[3](#3) | Remove duplicates and links extraction | `29,035` | `11,300` | `4,008` | – | – | – | [`gh_files_cleaned.json.gz`][gh_files_cleaned.json.gz] <br /> [`question_ids.csv`][question_ids.csv] <br /> [`answer_ids.csv`][answer_ids.csv]
[4](#4) | Extract answers text from *StackOverflow* | – | `10,991` | `64,678` | – | – | – | [`so_answers.csv.gz`][so_answers.csv.gz] <br /> [`so_answers_to_questions.csv.gz`][so_answers_to_questions.csv.gz]
[5](#5) | Combine *GitHub* files and *StackOverflow* answers | `27,940` | `13,300` | `63,123` | – | – | – | [`ghso_files_answers.json.gz`][ghso_files_answers.json.gz]
[6](#6) | *Type 3* clone detection | `330` | – | `199` | `330` | `199` | `330` | [`sogh_pairs_clones.json.gz`][sogh_pairs_clones.json.gz]
[7](#7) | Data preparation for manual evaluation | – | – | – | – | – | – | [`sogh_pairs_clones_files.tar.gz`][sogh_pairs_clones_files.tar.gz] <br /> [`sogh_pairs_clones_diffs.tar.gz`][sogh_pairs_clones_diffs.tar.gz]
[8](#8) | Manual check | – | – | – | 𐄂 | 𐄂 | `135` | [`sogh_pairs_diffs_apizations.tar.gz`][sogh_pairs_diffs_apizations.tar.gz] <br /> [`sogh_pairs_diffs_different_semantic.tar.gz`][sogh_pairs_diffs_different_semantic.tar.gz] <br /> [`sogh_pairs_diffs_tests.tar.gz`][sogh_pairs_diffs_tests.tar.gz] <br /> [`sogh_pairs_diffs_false_positives.tar.gz`][sogh_pairs_diffs_false_positives.tar.gz]

### 1. *StackOverflow* archive {#1}

### 2. Filter suitable snippets {#2}

### 3. *APIzator* processing {#3}

### 4. Well-formed method declaration snippets removal {#4}

### 5. Rank most viewed snippets {#5}

### 6. Human *APIzation* {#6}

Step | Description | Snippets | APIzator-APIs | Human-APIs | Data | Script
---: | --- | --- | --- | --- | --- | ---
1 | 𐄂 snippets from StackOverflow | – | – | – | 𐄂 | 𐄂
2 | Suitable snippets filtering | – | – | – | 𐄂 | 𐄂
3 | APIzator processing | `12,689` | `12,689` | – | ✓ | ✓
4 | Well-formed method declaration snippets removal | `10,890` | `10,890` | – | 𐄂 | 𐄂
5 | Ranking most viewed snippets | `170` | `170` | – | 𐄂 | 𐄂
6 | Human APIzation | `130` | `130` | `130` | ✓ | –

1. We started from the dump of StackOverflow of May, 2019.

2. We reduced the list of snippets to those referring to the Java programming language.
We also extracted the snippets from the StackOverflow pages.

3. We ran APIzator on the Java snippets from StackOverflow.
This also includes CSnippEx, to make the snippets compilable and other passages that could have reduced the list of valid snippets.

4. We removed those snippets already presenting a well-formed method declaration, therefore not suitable for the study.

5. We ranked the snippets based on the number of views on StackOverflow.
We selected the top ones to be sent to `17` human participants.

6. `13` out of `17` human participants performed the APIzation.
Thus, they produced a total of `130` method declarations.
