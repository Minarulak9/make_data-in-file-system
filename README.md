# make_data-in-file-system

requierments: nodejs

<code>let project1 = new Project("foldername");</code>
this will create a project in <b>./output/foldername/foldername.txt</b>

now you can perform many operation on <b>project1</b>;
like:
<code>project1.writeRandomNumbers(1, 100, 100);</code>
=>firstly remove all the content and write rand numbers (min,max,count)
=>min and max is range of random number and count is how many numbers you want.
<code>project1.appendRandNumbers(1, 1, 100);</code>
=>this will not remove the content of file just append new rand numbers to the file
