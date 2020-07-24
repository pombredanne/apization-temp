---
title: "Study on APIzations"
---

This section contains all the data we used to conduct our investigatory study to understand how developers perform *APIzations*.

We collected examples of manual *APIzations* by mining both *GitHub* and *StackOverflow*.
These examples represent such cases in which developers grabbed the snippets from *StackOverflow* and adapted to their own codebase, published in a public repository on *GitHub*.
We only mined those examples on *GitHub* for which an explicit link to a *StackOverflow* is reported as part of the method documentation.

The insights gained from this study led to four common *APIzation* patterns that establish the foundations of our proposed technique.

[gh_files.json.gz]: /data/gh_files.json.gz
[gh_files_cleaned.json.gz]: /data/gh_files_cleaned.json.gz
[question_ids.csv]: /data/question_ids.csv
[answer_ids.csv]: /data/answer_ids.csv
[so_answers.csv.gz]: /data/so_answers.csv.gz
[so_answers_to_questions.csv.gz]: /data/so_answers_to_questions.csv.gz
[ghso_files_answers.json.gz]: /data/ghso_files_answers.json.gz
[sogh_pairs_clones.json.gz]: /data/sogh_pairs_clones.json.gz
[sogh_pairs_clones_files.tar.gz]: /data/sogh_pairs_clones_files.tar.gz
[sogh_pairs_clones_diffs.tar.gz]: /data/sogh_pairs_clones_diffs.tar.gz
[sogh_pairs_diffs_apizations.tar.gz]: /data/sogh_pairs_diffs_apizations.tar.gz
[sogh_pairs_diffs_different_semantic.tar.gz]: /data/sogh_pairs_diffs_different_semantic.tar.gz
[sogh_pairs_diffs_tests.tar.gz]: /data/sogh_pairs_diffs_tests.tar.gz
[sogh_pairs_diffs_false_positives.tar.gz]: /data/sogh_pairs_diffs_false_positives.tar.gz

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

### 1. *GitHub* archive {#1}

We start from the GitHub archive on [Google BigQuery](https://cloud.google.com/bigquery) with the dump of `May, 2019`.

### 2. Filter *Java* files with an explicit link to *StackOverflow* {#2}

We queried *BigQuery* and extracted those *Java* files having an explicit link to a StackOverflow page, `%stackoverflow.com%`.
In particular, we queried the `bigquery-public-data.github_repos.contents` table.
We produced the file [`gh_files.json.gz`][gh_files.json.gz].

### 3. Remove duplicates and links extraction {#3}

We cleaned the data from duplicates and recognized the IDs of *StackOverflow* questions and answers.
We processed [`gh_files.json.gz`][gh_files.json.gz] through a *Python* script that saves the filtered GitHub files into [`gh_files_cleaned.json.gz`][gh_files_cleaned.json.gz].
We also creates [`question_ids.csv`][question_ids.csv] and [`answer_ids.csv`][answer_ids.csv] files, which contain the IDs of the linked questions and answers, respectively.
In the case of [`answer_ids.csv`][answer_ids.csv], we find the associated question IDs in the next passages, being an answer IDs unique regardless of the question.
It might also happen that a single file has multiple *StackOverflow* link.

### 4. Extract answers text from *StackOverflow* {#4}

We uploaded [`answer_ids.csv`][answer_ids.csv] and [`question_ids.csv`][question_ids.csv] into *BigQuery*.
Then, we ran a query on `bigquery-public-data.stackoverflow.posts_answers` to retrieve the answer posts on the `May, 2019` dump of *StackOverflow*.
The answers IDs correspond to those links in which an answer post was explicitly declared.
For this, we used the IDs belonging to [`answer_ids.csv`][answer_ids.csv].
We saved the results into a CSV file [`so_answers.csv.gz`][so_answers.csv.gz].
Instead, we ran another query to collect all the answer posts related to the questions we extracted from links, using the IDs in [`question_ids.csv`][question_ids.csv].
We saved the results into a CSV file [`so_answers_to_questions.csv.gz`][so_answers_to_questions.csv.gz].
Until this moment, we have the information on all the involved questions and possible answers.

### 5. Combine *GitHub* files and *StackOverflow* answers {#5}

We combined [`gh_files_cleaned.json.gz`][gh_files_cleaned.json.gz] containing the *Java* files, with the answers contained in [`so_answers.csv.gz`][so_answers.csv.gz] and [`so_answers_to_questions.csv.gz`][so_answers_to_questions.csv.gz], using a Python script.
We also removed all the files for which we could not obtain all the required information.
We save the results into the file [`ghso_files_answers.json.gz`][ghso_files_answers.json.gz], which contains for every GitHub file all the possible answers.

### 6. *Type 3* clone detection {#6}

We processed [`ghso_files_answers.json.gz`][ghso_files_answers.json.gz] to extract `public` methods from files, only those reporting an explicit link to *StackOverflow* in the documentation/comment.

We converted all the *StackOverflow* possible answer texts into code snippets.
For each links between a method and possible snippets, we created the pairs of `(snippet, method)`.
We also filtered out those snippets with less lines of code than `6`.

Finally, we detected the *type 3* code clones between snippet and method with a `70 %` matching threshold.
We saved the results in the [`sogh_pairs_clones.json.gz`][sogh_pairs_clones.json.gz] file.

### 7. Data preparation for manual evaluation {#7}

We prepared the data for manual evaluation.
We parsed [`sogh_pairs_clones.json.gz`][sogh_pairs_clones.json.gz] to prepare a folder for every pair `so#{so_answer_id}_gh#{gh_file_id}`, containing:

1. the `so#{so_answer_id}.java` snippet from *StackOverflow*
2. the `gh#{gh_file_id}.java` matching method code from *GitHub*

We saved all the files into a folder, compressed into the file [`sogh_pairs_clones_files.tar.gz`][sogh_pairs_clones_files.tar.gz].

Then, we created the HTML files, visually showing the differences between the snippet and method, using the *diff* and [*diff2html*](https://diff2html.xyz) utilities.

We saved all the files into a compressed file [`sogh_pairs_clones_diffs.tar.gz`][sogh_pairs_clones_diffs.tar.gz].

### 8. Manual check {#8}

We pruned the pairs due to spurious code clones, those snippets that were included into a larger *GitHub* method.
We manually evaluated and classified all the pairs:

* [`sogh_pairs_diffs_apizations.tar.gz`][sogh_pairs_diffs_apizations.tar.gz], the final set of pairs used for the analysis, as examples of valid APIzations
* [`sogh_pairs_diffs_different_semantic.tar.gz`][sogh_pairs_diffs_different_semantic.tar.gz], the pairs where the *StackOverflow* snippets were included into more complex methods
* [`sogh_pairs_diffs_tests.tar.gz`][sogh_pairs_diffs_tests.tar.gz], not valid pairs because they are test cases
* [`sogh_pairs_diffs_false_positives.tar.gz`][sogh_pairs_diffs_false_positives.tar.gz], not valid examples of reuse
