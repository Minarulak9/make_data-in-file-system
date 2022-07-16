# make_data-in-file-system

requierments: nodejs

<code>let project1 = new Project("foldername");</code><br>
this will create a project in <b>./output/foldername/foldername.txt</b>
<br>
now you can perform many operation on <b>project1</b>;<br>
like:<br>
<code>project1.writeRandomNumbers(1, 100, 100);</code><br>
=>firstly remove all the content and write rand numbers (min,max,count)<br>
=>min and max is range of random number and count is how many numbers you want.<br>
<code>project1.appendRandNumbers(1, 1, 100);</code><br>
=>this will not remove the content of file just append new rand numbers to the file<br>
<code>project1.readData();</code><br>
=>this will read rand numbers to the file and log..<br>
<code>project1.sortData();</code><br>
=>for sorting data<br>
<code>project1.clearData();</code><br>
=>for clear content of file<br>
<code>project1.find(4);</code><br>
=>for finding 4 in sorted numbers<br>
