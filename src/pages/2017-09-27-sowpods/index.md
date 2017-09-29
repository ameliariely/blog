---
title: SOWPODS
date: "2017-09-27T02:12:03.284Z"
path: "/sowpods/"
---

Yesterday Connor and I paired on a little program that takes in the SOWPODS list of words for Scrabble and determines various properties of the list. We decided to do it Kotlin using function methods. Here's a little piece of what we wrote. It prints out a list of all the words that contain "UU". Cool!

We learned about the `it` keyword, and I subsequently I discovered that in 2014 it was [considered for removal](https://discuss.kotlinlang.org/t/will-it-variable-stay-or-go/522) from the language because of its potential for ambiguity in nested lambdas. In this very small example, I think `it` is actually super readable, so decided to leave it in, though I would avoid it in anything more complex.

```
import java.io.File
import java.io.InputStream


fun main(args: Array<String>) {
    val wordList = sourceWordListFromFile()
    val noUUList = wordList.filter { containsUU(it) }
    noUUList.forEach { println(it) }
}

fun sourceWordListFromFile() : List<String> {
    val wordList = mutableListOf<String>()
    val inputStream: InputStream = File("./src/sowpods.txt").inputStream()
    inputStream.bufferedReader().useLines { words -> words.forEach { wordList.add(it) } }
    return wordList
}

fun containsUU(word: String): Boolean {
    return word.contains(Regex("UU"))
}
```
