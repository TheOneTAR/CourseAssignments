# Sorting Algorithms
_Algorithms are patterns that help us solve common problems. Familiarity with how to implement some common algorithms is key._

Students will implement three common sorting algorithms, one after another, as methods in a Python module.

Each method will take a filename as input, and then output the sorted contents of that file to a new file. The file given will contain a list of numbers, separated by spaces. For example, you might receive a file that contains:

34 28 1 30 2 34 17 9 8

The solution output of the above would be within a new file, named for the sort used, and look like:

1 2 8 9 17 28 30 34 34  

The details of each sorting method for the three required methods can be found below. The names of the three methods should be the name of the sort implemented, ie 'insertion_sort'.

_Note: Students are welcome and encouraged to create 'helper functions' that their required methods may use._

### Insertion Sort
Insertion sort iterates through an entire list, removing one element from the input data each iteration, finding the location that element belongs within the sorted list, and inserting it there. It repeats until no input elements remain. It is one of the most inefficient sorts available for large data with a time complexity of O(n^2), but it is the easiest to implement.

### Selection Sort
The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

Selection sort also has a O(n^2) time complexity, but it requires less additional memory than insertion sort.

### Merge Sort
Conceptually, a merge sort works as follows:

1. Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
2. Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

Merge sort is a solid efficient, general purpose sorting algorithm that uses a 'divide and conquer' comparison method to sort. It is often implemented using recursion.
