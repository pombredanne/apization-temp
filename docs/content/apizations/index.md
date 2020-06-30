---
title: "Study on APIzations"
---

This sections contains all the data and scripts we used to conduct our investigatory study to understand how developers perform *APIzations*.

We collected examples of manual *APIzations* by mining both *GitHub* and *StackOverflow*.
These examples represent such cases in which developers grabbed the snippets from *StackOverflow* and adapted to their own codebase, published in a public repository on *GitHub*.
We only mined those examples on *GitHub* for which an explicit link to a *StackOverflow* is reported as part of the method documentation.

The insights gained from this study led to four common *APIzation* patterns that establish the foundations of our proposed technique.

## Process

The following table shows the steps of our processing method to collect the data for the study.

Step | Description | Files | Questions | Answers | Methods | Snippets | Pairs | Data | Script
---: | --- | --- | --- | --- | --- | --- | --- | --- | ---
1 | GitHub archive | `~1,000,000` | – | – | – | – | – | 𐄂 | –
2 | Select only Java files with explicit link to StackOverflow | `57,810` | – | – | – | – | – | ✓ | ✓
3 | Remove duplicates and links extraction | `29,035` | `11,300` | `4,008` | – | – | – | ✓ | ✓
4 | Extract answers text from StackOverflow | – | `10,991` | `64,678` | – | – | – | ✓ | ✓
5 | Combine GitHub files and StackOverflow answers | `27,940` | `13,300` | `63,123` | – | – | – | ✓ | ✓
6 | Public methods extraction | – | – | – | `16,739` | – | – | 𐄂 | 𐄂
7 | Snippet and method pairing | – | – | 𐄂 | 𐄂 | 𐄂 | `17,624` | 𐄂 | 𐄂
8 | Type 3 clone detection | `330` | 𐄂 | `199` | `330` | `199` | `330` | ✓ | 𐄂
9 | Data preparation for manual evaluation | – | – | – | – | – | – | ✓ | ✓
10 | Manual check | – | – | – | 𐄂 | 𐄂 | `134` | ✓ | –

### 1. GitHub archive

We start from the GitHub archive on BigQuery with the dump of May, 2019.

2. We queried BigQuery and extracted those `Java` files having an explicit link to a StackOverflow page, `%stackoverflow.com%`.
We used the query in `bigquery_get_gh_files.sql` to produce the file `gh_files.json.gz`.

3. We cleaned the data from duplicates and recognized the IDs of StackOverflow questions and answers.
We used the Python script `process_gh_files.py` that saves the filtered GitHub files into `gh_files_cleaned.json.gz`.
It also creates `question_ids.csv` and `answer_ids.csv`, which contain the IDs of the linked questions and answers, respectively, in the whole file.
In the case of `answer_ids.csv`, we find the associated question IDs in the next passages, being an answer IDs unique regardless of the question.
It might also happen that a single file has multiple StackOverflow link.

4. We uploaded `answer_ids.csv` and `question_ids.csv` into BigQuery.
Then, we ran `bigquery_get_so_answers.sql` to retrieve the answer posts on the May, 2019 dump of StackOverflow.
The answers IDs correspond to those links in which an answer post was explicitly declared.
We saved the results into a CSV file `so_answers.csv.gz`.
Instead, we ran `bigquery_get_so_answers_to_questions.sql` to collect all the answer posts related to the questions we extracted from links.
We saved the results into a CSV file `so_answers_to_questions.csv.gz`.
Until this moment, we have information on all the involved questions and possible answers.

5. We combined `gh_files_cleaned.json.gz` containing the Java files, with the answers contained in `so_answers.csv.gz` and `so_answers_to_questions.csv.gz`, using the Python script `combine_ghso.py`.
We also removed all the files for which we could not obtain all the required information.
We save the results in the file `ghso_files_answers.json.gz`, which contains for every GitHub file all the possible answers.

6. We processed `ghso_files_answers.json.gz` to extract `public` methods from files, only those reporting an explicit link to StackOverflow in the documentation/comment.

7. We converted all the StackOverflow possible answer texts into code snippets.
For each links between a method and possible snippets, we created the pairs of `(snippet, method)`.
We also filtered out those snippets with less lines of code than `6`.

8. We detected the type 3 code clones between snippet and method with a `70 %` matching threshold.
We saved the results in the `sogh_pairs_clones.json.gz` file.

9. We prepared the data for manual evaluation.
We used `prepare_files_for_diff.py` on `sogh_pairs_clones.json.gz` to prepare a folder for every pair `so#{so_answer_id}_gh#{gh_file_id}`, containing: (1) the `so#{so_answer_id}.java` snippet from StackOverflow, and (2) the `gh#{gh_file_id}.java` matching method code from GitHub.

10. We pruned the pairs due to spurious code clones, those snippets that were included into a larger GitHub method.
We manually evaluated and classified all the pairs.
