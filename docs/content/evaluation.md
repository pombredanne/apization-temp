---
title: 📝 Evaluation of the approach (APIzator)
---

This section contains all the data we used to evaluate our approach called *APIzator*.

We collected a large sample of *StackOverflow* posts regarding questions on *Java* and run our tool *APIzator* to automatically generate *APIzations*.
We release the full collection of generated *APIzations* that developers can compile and run.
A sample of the *APIzations* is available through our [search engine](/search), where you can easily search and compare with the original snippets.

For the evaluation of the approach, we asked human participants to apply the *APIzation* on a subset of the extracted snippets, to constitute the oracle for our study.
In our evaluation study, we compare the automatic generated *APIzations* to those of the oracle.
We release all the snippets, human' and our tool's *APIzations* in the form of browsable pages at the section [APIzations](/apizations).


## Process

The following table shows the steps of our processing method to collect the data for the study.

Step | Description | Questions | Answers | Snippets | APIzator-APIs | Human-APIs | Data
---: | --- | --- | --- | --- | --- | --- | ---
[1](#1) | *StackOverflow* archive | – | – | – | – | – | –
[2](#2) | Filter suitable content | `1,014,980` | `1,730,251` | – | – | – | [`so_answers.jsonl.xz.part.000`][so_answers.jsonl.xz.part.000] <br /> [`so_answers.jsonl.xz.part.001`][so_answers.jsonl.xz.part.001] <br /> [`so_answers.jsonl.xz.part.002`][so_answers.jsonl.xz.part.002] <br /> [`so_answers.jsonl.xz.part.003`][so_answers.jsonl.xz.part.003] <hr /> [`so_questions.jsonl.xz.part.000`][so_questions.jsonl.xz.part.000] <br /> [`so_questions.jsonl.xz.part.001`][so_questions.jsonl.xz.part.001] <br /> [`so_questions.jsonl.xz.part.002`][so_questions.jsonl.xz.part.002] <br /> [`so_questions.jsonl.xz.part.003`][so_questions.jsonl.xz.part.003]
[3](#3) | Make the snippets compilable | `672,606` | `1,040,207` | `1,040,207` | – | – | [`external_libraries_jars.tar.xz.part.000`][external_libraries_jars.tar.xz.part.000] <br /> [`external_libraries_jars.tar.xz.part.001`][external_libraries_jars.tar.xz.part.001] <br /> [`external_libraries_jars.tar.xz.part.002`][external_libraries_jars.tar.xz.part.002] <br /> [`external_libraries_jars.tar.xz.part.003`][external_libraries_jars.tar.xz.part.003] <br /> [`external_libraries_jars.tar.xz.part.004`][external_libraries_jars.tar.xz.part.004] <hr /> [`compilable_snippets.tar.xz.part.000`][compilable_snippets.tar.xz.part.000] <br /> [`compilable_snippets.tar.xz.part.001`][compilable_snippets.tar.xz.part.001]
[4](#4) | *APIzator* processing | `332,029` | `453,185` | `453,185` | `453,185` | – | [`apizations_java.tar.xz`][apizations_java.tar.xz]
[5](#5) | Study snippets filtering | `16,635` | `16,635` | `16,635` | `16,635` | – | [`apizations_candidates.csv`][apizations_candidates.csv]
[6](#6) | Human *APIzation* | – | – | – | – | `[X]` | [`human_apizations.tar.xz`][human_apizations.tar.xz]



### 1. *StackOverflow* archive {#1}

We start from the *StackOverflow* archive on [The Internet Archive](https://archive.org/details/stackexchange) with the dump of `May, 2019`.



### 2. Filter suitable content {#2}

Starting from the large dump of *StackOverflow*, we filtered and extracted only questions tagged with *Java*.
Then, we extracted the answers with at least one code snippet, defined by the HTML tags `<pre><code>`.

We produced the files:

* [`so_answers.jsonl.xz.part.000`][so_answers.jsonl.xz.part.000]
* [`so_answers.jsonl.xz.part.001`][so_answers.jsonl.xz.part.001]
* [`so_answers.jsonl.xz.part.002`][so_answers.jsonl.xz.part.002]
* [`so_answers.jsonl.xz.part.003`][so_answers.jsonl.xz.part.003]

The archive `so_answers.json.xz` file was split into multiple chunks.
You can obtain a single file with the command:

```bash
cat so_answers.jsonl.xz.part.* > so_answers.jsonl.xz
```

We also extracted the related questions.
We produced the files:

* [`so_questions.jsonl.xz.part.000`][so_questions.jsonl.xz.part.000]
* [`so_questions.jsonl.xz.part.001`][so_questions.jsonl.xz.part.001]
* [`so_questions.jsonl.xz.part.002`][so_questions.jsonl.xz.part.002]
* [`so_questions.jsonl.xz.part.003`][so_questions.jsonl.xz.part.003]



### 3. Make the snippets compilable {#3}

We processed the *StackOverflow* posts by using *CSnippEX*.
Considering the large amount of snippets to process, we had to set up an upper limit to make the mining activity feasible.
We set up processing time of `5` seconds to allow *CSnippEX* to make the snippet compilable and retrieve the possible importing packages.

*CSnippEX* queries the [Maven Repository](https://mvnrepository.com) library search engine, which has indexed around 10 millions *Java* libraries.
For each library category, we selected the top three libraries and we downloaded their latest version.
We also included the runtime dependencies of these library using the dependency resolver of *Maven*, which gave us a total of `748` `JAR` files.
We publish the final set of `JARs`:

* [`external_libraries_jars.tar.xz.part.000`][external_libraries_jars.tar.xz.part.000]
* [`external_libraries_jars.tar.xz.part.001`][external_libraries_jars.tar.xz.part.001]
* [`external_libraries_jars.tar.xz.part.002`][external_libraries_jars.tar.xz.part.002]
* [`external_libraries_jars.tar.xz.part.003`][external_libraries_jars.tar.xz.part.003]
* [`external_libraries_jars.tar.xz.part.004`][external_libraries_jars.tar.xz.part.004]

As for the *Java* environment, we used the *Java* executables and *JRE* included in the version `jdk-8u171-linux-x64`.

At the end of the process, we obtained `1,040,207` compilable code snippets, we release as `JSON` files:

* [`compilable_snippets.tar.xz.part.000`][compilable_snippets.tar.xz.part.000]
* [`compilable_snippets.tar.xz.part.001`][compilable_snippets.tar.xz.part.001]



### 4. *APIzator* processing {#4}

We used the compilable snippets from the previous step as input for our tool *APIzator*.
Every produced API also includes a method name we generated by a *POS* *NPL* technique.
We were able to produce `453,185` valid *APIzations*, whose *Java* source files are available in the [`apizations_java.tar.xz`][apizations_java.tar.xz] file.

A sample of the *APIzations* is available through our [search engine](/search), where you can easily search and compare with the original snippets.



### 5. Filter suitable snippets {#5}



To prepare the data for the human evaluation part, we applied some filters on the snippets we collected in the previous step.
First, we selected only snippets belonging to questions in the form of `how *`.
To ensure enough level of quality, we only selected snippets related to accepted answers.
Also, we excluded those snippets that *CSnippEx* identified as associated to third-party libraries, since they could require specific knowledge that human participants might not have.
Finally, we removed those snippets already presenting a well-formed method declaration, therefore not suitable for the study.

In total, we collected a total of `16,635` snippets, whose list is included in the file [`apizations_candidates.csv`][apizations_candidates.csv].



### 6. Human *APIzation* {#6}

We asked `[X]` human participants to perform a manual *APIzation*, `10` snippets each.
We randomly assigned the snippets from the [`apizations_candidates.csv`][apizations_candidates.csv] list.
`[X]` out of `[X]` human participants performed the *APIzation*.
Thus, they produced a total of `[X]` method declarations.
We release the produced *APIzations* in the file [`human_apizations.tar.xz`][human_apizations.tar.xz].

Moreover, we release all the snippets, human' and our tool's *APIzations* in the form of browsable pages at the section [APIzations](/apizations).



[so_answers.jsonl.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_answers.jsonl.xz.part.000
[so_answers.jsonl.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_answers.jsonl.xz.part.001
[so_answers.jsonl.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_answers.jsonl.xz.part.002
[so_answers.jsonl.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_answers.jsonl.xz.part.003
[so_questions.jsonl.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_questions.jsonl.xz.part.000
[so_questions.jsonl.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_questions.jsonl.xz.part.001
[so_questions.jsonl.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_questions.jsonl.xz.part.002
[so_questions.jsonl.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/so_questions.jsonl.xz.part.003

[compilable_snippets.tar.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/compilable_snippets.tar.xz.part.000
[compilable_snippets.tar.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/compilable_snippets.tar.xz.part.001

[external_libraries_jars.tar.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/external_libraries_jars.tar.xz.part.000
[external_libraries_jars.tar.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/external_libraries_jars.tar.xz.part.001
[external_libraries_jars.tar.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/external_libraries_jars.tar.xz.part.002
[external_libraries_jars.tar.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/external_libraries_jars.tar.xz.part.003
[external_libraries_jars.tar.xz.part.004]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/external_libraries_jars.tar.xz.part.004

[apizations_java.tar.xz]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/apizations_java.tar.xz

[apizations_candidates.csv]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/apizations_candidates.csv

[human_apizations.tar.xz]: https://github.com/pasqualesalza/apization-temp-data/raw/master/evaluation/human_apizations.tar.xz
