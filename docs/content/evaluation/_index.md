---
title: 📝 Evaluation of the approach (APIzator)
---

This section contains all the data we used to evaluate our approach called *APIzator*.

We collected a large sample of *StackOverflow* posts regarding questions on *Java* and run our tool *APIzator* to automatically generate *APIzations*.
We release the full collection of generated *APIzations* that developers can compile and run.
A sample of the *APIzations* is available through our [search engine](/search), where you can easily search and compare with the original snippets.

For the evaluation of the approach, we asked human participants to apply the *APIzation* on a subset of the extracted snippets, to constitute the oracle for our study.
In our evaluation study, we compare the automatic generated *APIzations* to those of the oracle.



## Process

The following table shows the steps of our processing method to collect the data for the study.

Step | Description | Questions | Answers | Snippets | APIzator-APIs | Human-APIs | Data
---: | --- | --- | --- | --- | --- | --- | ---
[1](#1) | *StackOverflow* archive | – | – | – | – | – | –
[2](#2) | Filter suitable content | `1,014,980` | `1,730,251` | – | – | – | [`so_answers.jsonl.xz.part.000`][so_answers.jsonl.xz.part.000] <br /> [`so_answers.jsonl.xz.part.001`][so_answers.jsonl.xz.part.001] <br /> [`so_answers.jsonl.xz.part.002`][so_answers.jsonl.xz.part.002] <br /> [`so_answers.jsonl.xz.part.003`][so_answers.jsonl.xz.part.003] <hr /> [`so_questions.jsonl.xz.part.000`][so_questions.jsonl.xz.part.000] <br /> [`so_questions.jsonl.xz.part.001`][so_questions.jsonl.xz.part.001] <br /> [`so_questions.jsonl.xz.part.002`][so_questions.jsonl.xz.part.002] <br /> [`so_questions.jsonl.xz.part.003`][so_questions.jsonl.xz.part.003]
[3](#3) | Make the snippets compilable | `672,606` | `1,040,207` | `1,040,207` | – | – | [`external_libraries_jars.tar.xz.part.000`][external_libraries_jars.tar.xz.part.000] <br /> [`external_libraries_jars.tar.xz.part.001`][external_libraries_jars.tar.xz.part.001] <br /> [`external_libraries_jars.tar.xz.part.002`][external_libraries_jars.tar.xz.part.002] <br /> [`external_libraries_jars.tar.xz.part.003`][external_libraries_jars.tar.xz.part.003] <br /> [`external_libraries_jars.tar.xz.part.004`][external_libraries_jars.tar.xz.part.004] <hr /> [`compilable_snippets.tar.xz.part.000`][compilable_snippets.tar.xz.part.000] <br /> [`compilable_snippets.tar.xz.part.001`][compilable_snippets.tar.xz.part.001]
[5](#4) | Well-formed method declaration snippets removal | – | – | x `10,890` | x `10,890` | – | x
[5](#5) | Rank most viewed snippets | – | – | `170` | `170` | – | [`human_evaluation_snippets.tar.xz`][human_evaluation_snippets.tar.xz]
[6](#6) | Human *APIzation* | – | – | `130` | `130` | `130` | [`human_apis.tar.xz`][human_apis.tar.xz]



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
We publish the final set of *JARs*:

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


### 4. Well-formed method declaration snippets removal {#4}
<!-- NOT READY. -->

To prepare the data for the human evaluation part, we removed those snippets already presenting a well-formed method declaration, therefore not suitable for the study.
Also, we excluded those snippets that *CSnippEx* identified as associated to third-party libraries, since they could require specific knowledge that human participants might not have.
<!-- Insert the files. -->



### 5. Rank most viewed snippets {#5}
<!-- NOT READY. -->

We ranked the snippets based on the number of views on StackOverflow.
We selected the top ones to be sent to `17` human participants, `10` snippets each.
<!-- Insert the files. -->



### 6. Human *APIzation* {#6}
<!-- NOT READY. -->

`13` out of `17` human participants performed the *APIzation*.
Thus, they produced a total of `130` method declarations.
<!-- Insert the files. -->


[so_answers.jsonl.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_answers.jsonl.xz.part.000
[so_answers.jsonl.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_answers.jsonl.xz.part.001
[so_answers.jsonl.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_answers.jsonl.xz.part.002
[so_answers.jsonl.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_answers.jsonl.xz.part.003
[so_questions.jsonl.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_questions.jsonl.xz.part.000
[so_questions.jsonl.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_questions.jsonl.xz.part.001
[so_questions.jsonl.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_questions.jsonl.xz.part.002
[so_questions.jsonl.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/so_questions.jsonl.xz.part.003

[compilable_snippets.tar.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/compilable_snippets.tar.xz.part.000
[compilable_snippets.tar.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/compilable_snippets.tar.xz.part.001

[external_libraries_jars.tar.xz.part.000]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/external_libraries_jars.tar.xz.part.000
[external_libraries_jars.tar.xz.part.001]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/external_libraries_jars.tar.xz.part.001
[external_libraries_jars.tar.xz.part.002]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/external_libraries_jars.tar.xz.part.002
[external_libraries_jars.tar.xz.part.003]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/external_libraries_jars.tar.xz.part.003
[external_libraries_jars.tar.xz.part.004]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/external_libraries_jars.tar.xz.part.004

[apizations_java.tar.xz]: https://github.com/pasqualesalza/apization-temp-data/raw/master/study/apizations_java.tar.xz